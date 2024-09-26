import axios from 'axios';
import React from 'react'
import { Link, Navigate, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import  Wrapper from "../assets/wrappers/CocktailPage";
import { useQuery } from '@tanstack/react-query';
const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const singleCocktailQuery =(id)=>{
  return {
    queryKey:['cocktail', id],
    queryFn: async()=>{
      const {data} = await axios.get(`${singleCocktailUrl}${id}`)
       return data;
    }
  }
};


export const loader= (queryClient)=>async({params})=>{
  console.log(params);
  const {id}= params;
  await queryClient.ensureQueryData(singleCocktailQuery(id));
  //const response = await axios.get(`${singleCocktailUrl}${id}`);
  //console.log(response);
  //const drink = response.data.drinks[0];
   return { id:id};
};
 const Cocktail = () => {
  const {id} = useLoaderData();
  const {data}= useQuery(singleCocktailQuery(id));
  //const { data } = useQuery(singleCocktailQuery(id));
  if (!data) return <Navigate to='/' />;

  const drink = data.drinks[0];

  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drink;
  console.log(drink)
  const IngridientKeys= Object.keys(drink)?.filter((eachKey)=>eachKey?.includes('strIngredient') 
                                                                &&  drink[eachKey]!=null);
 console.log(IngridientKeys);                                                                
  return (
<Wrapper>
  <header>
    <Link to='/' className ='btn'>
    back home
    </Link>
    <h3>{name}</h3>
  </header>
  <div className="drink">
    <img src={image} alt={name} />
    <div className="drink-info">
      <p>
        <span className="drink-data">{name}</span>
      </p>
      <p>
        <span className="drink-data">{category}</span>
      </p>
      <p>
        <span className="drink-data">{info}</span>
      </p>
      <p>
        <span className="drink-data">{glass}</span>
      </p>
      <p>
        <span className="drink-data">{instructions}</span>
      </p>
      <p>Ingridients: {IngridientKeys.map((eachKey, index)=>
      <span className="drink-data" key={index}>{drink[eachKey]}</span>
      )}</p>
    </div>
  </div>
</Wrapper>  )
}
export default Cocktail;