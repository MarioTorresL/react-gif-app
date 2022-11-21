import {useEffect, useState} from "react";
import {getGiffs} from "../helpers/getGifs";


export const useFetchGifs = ( category ) =>{

  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState( true )

  const getNewGiff = async () => {

    const newGiff = await getGiffs(category);

    setGifs(newGiff);
    setIsLoading(false)

  };

  useEffect(() => {
    getNewGiff();
  }, []);
  return {
    gifs,
    isLoading
  }
}
