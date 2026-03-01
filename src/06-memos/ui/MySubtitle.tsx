import { memo } from "react";

interface MySubtitleProps {
  subtitle: string;
  callMyApi: () => void;
}

export const MySubtitle = memo( ( { subtitle, callMyApi, }: MySubtitleProps ) => {
  console.log('<--------------- JK MySubtitle --------------->');
  console.log({subtitle});
  return (
    <>
      <h6 className="text-2xl font-bold">{subtitle}</h6>
      <button 
        type="button"
        className="bg-indigo-500 text-white, px-2 py-1 rounded-md cursor-pointer"
        onClick={callMyApi}
      >Call action</button>
    </>
  );
})
