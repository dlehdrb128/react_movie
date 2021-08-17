import React from 'react'

const Food = ({fav}) => {
  return <h1>i like {fav}</h1>
}

function App() {
  return (
    <div>
     <h1>hellow!</h1>
      <Food fav="kimchi" />
      <Food fav="라면"/>
      <Food fav="햄버거" />
    </div>
  );
}

export default App;
