import { UserContext } from "@/08-useContext/context/UserContext"
import { Button } from "@/components/ui/button";
import { use } from "react"
import { Link } from "react-router"

export const AboutPage = () => {
  const { isAuthenticated, logout } = use( UserContext );
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">About me</h1>
      <hr />
      <div className="flex flex-col gap-2">
        {
          isAuthenticated && (
            <Link className="hover:text-blue-500 underline text-2xl" to="/profile">Profile</Link>
          )
        }
        {
          isAuthenticated 
          ? <Button variant="destructive" className="mt-4" onClick={logout}>Exit</Button>
          : <Link className="hover:text-blue-500 underline text-2xl" to="/login">Login</Link>
        }
      </div>
    </div>
  )
}
