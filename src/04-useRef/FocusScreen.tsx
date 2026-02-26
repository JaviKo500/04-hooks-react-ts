import { useRef } from "react"

export const FocusScreen = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef?.current?.focus();
  }
  return (
    <div className="bg-gradient flex flex-col items-center gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <input 
        type="text"  
        className="bg-white text-black rounded-md p-2 w-80"
        ref={inputRef}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={handleClick}
      >
        Set focus
      </button>
    </div>
  )
}
