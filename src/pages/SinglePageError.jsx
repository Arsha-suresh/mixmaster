import React from 'react'
import { useRouteError } from 'react-router-dom';

 const SinglePageError = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div>Error in Landing page</div>
  )
}
export default SinglePageError;
