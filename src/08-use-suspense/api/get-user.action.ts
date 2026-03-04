export interface User {
  id: number;
  name: string;
  role: string;
  location: string;
}  

export const getUserAction = async (id: number): Promise<User> => {
  await new Promise( resolve => setTimeout( resolve, 3000) );
  return {
    id,
    name: 'Javiko',
    role: 'Developer',
    location: 'Cuenca, Ecuador',
  }
}