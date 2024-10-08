import React from 'react'
import Wrapper from '../assets/wrappers/SearchForm';
 import {Form, useNavigation} from "react-router-dom";

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state ==='submitting';
  return (
    <Wrapper>
      <Form className='form'>
        <input type="search" name="search" defaultValue={searchTerm} />
        <button type="Submit" className='btn' disabled={isSubmitting}>{
          isSubmitting?'Searching':'Search'}</button>

</Form> 
    </Wrapper>
 )
}

export default SearchForm