import React from 'react'
import { useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';

 const Error = () => {
    const error= useRouteError();
    if(error.status ===404){
  return (
    <Wrapper>
        <div>
            <img src={img} alt="404"></img>

        </div>
    </Wrapper>
  )
}
return(<Wrapper>
    <div>
        <h1>Something went wrong</h1>
    </div>
</Wrapper>)
}
export default Error;