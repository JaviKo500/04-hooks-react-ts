import type React  from "react"
import { useContext, useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link, useNavigate } from "react-router"
import { UserContext } from "@/08-useContext/context/UserContext"
import { toast } from "sonner"

export const LoginPage = () => {
  const { login } = useContext( UserContext );
  const [userId, setUserId] = useState('');
  const navigation = useNavigate();
  const handleSubmit = ( event: React.SubmitEvent<HTMLFormElement> ) => {
    event.preventDefault();
    const result = login( Number(userId) );
    if ( !result ) {
      toast.error(`Invalid user id: ${userId}`);
      return
    }
    navigation('/profile');
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10"
        onSubmit={handleSubmit}
      >
        <Input
          type="number"
          placeholder="User Id"
          value={userId}
          onChange={event => setUserId(event.target.value)}
        />
        <Button type="submit">Login</Button>
      </form>
      <Link className="hover:text-blue-500 underline" to="/about">
        <Button variant="ghost">About</Button>
      </Link>
    </div>
  )
}
