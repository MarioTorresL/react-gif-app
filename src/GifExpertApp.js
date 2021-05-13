import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp=()=>{

  // const categories = ['One Punch', 'Samuray X', 'Dragon Ball'];
  const [categories, setCategories] = useState(['The Office']);

  // const handleAdd=()=>{
  //   setCategories( [...categories, 'HunterXHunter'] );

  // } 

  return(
    <>
      <h2>Encuentra Tu Gif!</h2>
      <AddCategory setCategories={ setCategories }/>
      <hr/>
      {/* <button onClick={handleAdd}>Agregar</button> */}
      <ol>
        {
          categories.map(category => 
            <GifGrid key={category} category={ category }/>
          )
        }
      </ol>
    </>
  )
}
export default GifExpertApp;