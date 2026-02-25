import { useEffect, useState } from "react";

const colors: Record<string, string> = {
  red: 'bg-red-500 animate-pulse',
  yellow: 'bg-yellow-500 animate-pulse',
  green: 'bg-green-500 animate-pulse',
}

// type TrafficLightColors = 'red' | 'yellow' | 'green';
type TrafficLightColors = keyof typeof colors;

export const TrafficLightEffect = () => {

  const [light, setLight] = useState<TrafficLightColors>('red');
  const [countDown, setCountDown] = useState<number>(10);

  // * countDown effect
  useEffect( () => {
    if (countDown === 0)  return;
    const intervalId = setInterval( () => {
      setCountDown( countDown - 1 );
    }, 1000 );
    return () => clearInterval( intervalId );
  }, [countDown]);

  if ( countDown  === 0 ) {
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-hint">Traffic Light Effect</h1>
        <h2 className="text-white text-xl">CountDown: {countDown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full transition-all duration-100 is-linear"
            style={{
              width: `${ (countDown/10) * 100 }%`
            }}
          ></div>
        </div>
        <div className={`w-32 h-32 ${ light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
        <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
      </div>
    </div>
  );
};