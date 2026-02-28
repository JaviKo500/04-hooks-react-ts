import { useState } from "react";
import { MyTitle } from "./ui/MyTitle"
import { MySubtitle } from "./ui/MySubtitle";

export const MemoHook = () => {
  const [title, setTitle] = useState('Title test');
  const [subtitle, setSubtitle] = useState('Subtitle test');
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">
        MemoHook
      </h1>
      <MyTitle title={title} />
      <MySubtitle subtitle={subtitle} />
      <button 
      className="bg-blue-500 text-white, px-4 py-2 rounded-md cursor-pointer"
      onClick={() => setTitle('Title test 2')}
      >
        Change Title
      </button>
      <button 
      className="bg-blue-500 text-white, px-4 py-2 rounded-md cursor-pointer"
      onClick={() => setSubtitle('Subtitle test 2')}
      >
        Change Subtitle
      </button>
    </div>
  )
}
