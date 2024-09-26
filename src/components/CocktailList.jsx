import React from 'react'
import CocktailCard from './CocktailCard';
import Wrapper from '../assets/wrappers/CocktailList';


const CocktailList = ({ drinks}) => {
    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });
  return (
<Wrapper>
{formattedDrinks.map((item)=>{
    return <CocktailCard key={item.id} {...item}></CocktailCard>
})}
</Wrapper>  )
}

export default CocktailList