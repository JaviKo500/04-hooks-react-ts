import { useEffect } from "react"
import { getUserAction } from "./api/get-user.action";

export const ClientInformation = ({ id = 1 }: { id?: number }) => {
  useEffect( () => {
    getUserAction(id).then( user => {
      console.log(user);
    });
  }, [id] );
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin, text-white">Javiko - #500</h2>
      <p className="text-white text-2xl">
        Cuenca, Ecuador
      </p>
      <p className="text-white text-xl">
        User role
      </p>
    </div>
  )
}
