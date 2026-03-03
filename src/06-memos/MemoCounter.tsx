import { useCounter } from "@/hooks/useCounter"
import { useMemo } from "react";

const heavyStuff = (iterationNumber: number) => {
  console.time(`Heavy stuff started`);
  for (let index = 0; index < iterationNumber; index++) {
    console.log('<--------------- JK MemoCounter --------------->');
    console.log(`ahi vamos{}`);
    
  }
  console.timeEnd(`Heavy stuff started`);
  return `${iterationNumber} heavy stuff done`;
}

export const MemoCounter = () => {
  const { count, decrement, increment } = useCounter(40_000);
  const { count: counter2, increment: increment2 } = useCounter(10);
  const heavyStuffValue = useMemo(() =>  heavyStuff(counter2), [counter2]);
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">
        Memo - use memo
      </h1>
      <hr />
      <h4>
        counter: {count}
      </h4>
      <h4>
        counter: {counter2}
      </h4>
      <button 
      className="bg-blue-500 text-white, px-4 py-2 rounded-md cursor-pointer"
      onClick={increment}
      >
        Increase counter
      </button>
      <button 
      className="bg-blue-500 text-white, px-4 py-2 rounded-md cursor-pointer"
      onClick={decrement}
      >
        Decrease counter
        </button>
        <button 
      className="bg-blue-500 text-white, px-4 py-2 rounded-md cursor-pointer"
      onClick={increment2}
      >
        Increase counter2
        </button>
    </div>
  )
}
