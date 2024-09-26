import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import CocktailList from '../components/CocktailList';
import SearchForm from '../components/SearchForm';
import { useQuery } from '@tanstack/react-query';
const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const searchCocktailsQuery = (searchTerm) => {
    return {
      queryKey: ['search', searchTerm || 'all'],
      queryFn: async () => {
        const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
        return response.data.drinks;
      },
    };
  };

export const loader = (queryClient)=>async({request})=>{
     //let searchTerm = '';
     const Url =new URL(request.url);
     const searchTerm = (Url.searchParams.get('search')) ||'';
     

  //const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`)
   await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    //console.log(response);
    return { searchTerm}
    };

 const Landing = () => {
    const {  searchTerm} = useLoaderData();
    const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));
    console.log(drinks);
  return (
    <>
    <SearchForm searchTerm={searchTerm}/>
    <CocktailList drinks={drinks}></CocktailList>
    </>
  )
}
export default Landing;
