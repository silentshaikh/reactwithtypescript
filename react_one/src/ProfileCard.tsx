type profileType = {
    name:string,
    age:number,
    greet:JSX.Element,
    children:JSX.Element,
};

function ProfileCard({children,name,age,greet}:profileType) {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h2>Age: {age}</h2>
        {greet}
        {children}
    </div>
  )
}

export default ProfileCard
