import { useState } from "react";

export const useCounter = ( initialValue: number = 1 ) => {
  const [count, setCount] = useState<number>(initialValue);
  const increment = () => setCount( count + 1 );
  const decrement = () => setCount( count > initialValue ? count - 1 : initialValue );
  return {
    // props
    count,
    // methods
    increment,
    decrement,
  }
}
