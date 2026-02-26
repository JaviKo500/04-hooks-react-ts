import { useEffect, useState } from "react";

const colors: Record<string, string> = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

// type TrafficLightColors = 'red' | 'yellow' | 'green';
type TrafficLightColors = keyof typeof colors;

export const useTrafficLight = () => {

  const [light, setLight] = useState<TrafficLightColors>('red');
  const [countDown, setCountDown] = useState<number>(10);
  // * countDown effect
  useEffect(() => {
    if (countDown === 0) return;
    const intervalId = setInterval(() => {
      setCountDown(countDown - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDown]);

  if (countDown === 0) {
    switch (light) {
      case 'red':
        setCountDown(10);
        setLight('green');
        break;
      case 'yellow':
        setCountDown(10);
        setLight('red');
        break;
      case 'green':
        setCountDown(2);
        setLight('yellow');
        break;
    }
  }

  return {
    // props
    light,
    countDown,
    colors,
    // computed
    percentage: (countDown/10) * 100,
    greenLight: light === 'green' ? colors.green : 'bg-gray-500',
    yellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
    redLight: light === 'red' ? colors.red : 'bg-gray-500',
  }
}