interface MyTitleProps {
  title: string;
}

export const MyTitle = ( { title }: MyTitleProps ) => {
  console.log('<--------------- JK MyTitle --------------->');
  console.log({title});
  return (
    <h1 className="text-3xl">{title}</h1>
  )
}
