import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    // En react no se puede usar los if para valorar los hooks ya que se perderían las referencias
    // por lo que se debe usar una función que devuelva un valor

    const [categories, setCategories] = useState([ 'One Punch' ]);
    const onAddCategory = ( newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([ newCategory, ...categories ]);

    }
    const apiKey = 'J9uV1li63OzVV8l2TyiO45G9CpCPFRNm';
   /*  const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`); */
  return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategory onAddNewCategory={ onAddCategory }/>
        { 
            categories.map( (cat) => (<GifGrid key={ cat } category={cat}/>))
        }
    </>
  )
}
