import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Link } from "react-router"

export const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <hr />
      <form className="flex flex-col gap-2 my-10">
        <Input
          type="number"
          placeholder="User Id"
        />
        <Button type="submit">Login</Button>
      </form>
      <Link className="hover:text-blue-500 underline" to="/about">
        <Button variant="ghost">About</Button>
      </Link>
    </div>
  )
}
