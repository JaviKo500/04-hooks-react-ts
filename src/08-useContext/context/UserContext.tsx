import { useState, type PropsWithChildren } from "react"

// interface UserContextProps {
//   children: React.ReactNode
// }

export const UserContextProvider = ( {children}: PropsWithChildren  ) => {
  const [name, setName] = useState('Javiko');
  return <>
    {children}
  </>;
}
