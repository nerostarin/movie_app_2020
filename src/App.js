import React from 'react';
import img01 from './images/bg1.jpg';
import img02 from './images/bg2.jpg';
import img03 from './images/bg3.jpg';
import img04 from './images/bg4.jpg';


function Food({name, picture, message0})
{
   return (
    <div>
  <h3>I love Food{name}</h3>
  <img src={picture} alt={message0}/>
  </div>
  );
}

const foodILike = [
  {
    id: 1,
    name:'풍경',
    image: img01,
    message0:"풍경사진"
  }
  ,
  {
    id: 2,
    name:'풍경1',
    image:img02,
    message0:"풍경사진"

  },
  { id: 3,
    name:'풍경2',
    image:img03,
    message0:"풍경사진"

  },
  {
    id: 4,
    name:'풍경3',
    image:img04,
    message0:"풍경사진"

  },
  {
    id: 5,
    name:'풍경4',
    image:img04,
    message0:"풍경사진"

  }
];

function App() {
  //return <div className="App"/>;
  return (<div>
    {foodILike.map(dish => (<Food key={dish.id} name={dish.name} picture = {dish.image} message0m={dish.alt}/>))}
  </div>);
}

export default App;