import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGIFS";
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getImages = async (category) => {
        const images = await getGifs(category);
        setImages(images);  
        setLoading(false);
    }
    useEffect( () => {
        getImages(category);
    }, [ ]);
    return {
        images,
        isLoading
    }
}
