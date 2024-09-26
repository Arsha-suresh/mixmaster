import axios from 'axios';
import React from 'react'
import {Form, redirect} from 'react-router-dom';
import { toast } from 'react-toastify';


const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';
export const action = async({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    const response = await 
    axios.post(newsletterUrl,data);
    response?.then((data)=>console.log(data));
    console.log("data",response);
  console.log(response);
   toast.success('check email');
   return redirect('/');

  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
     return error;
    
  }
  

   //console.log(props);
   return null;
};

 const Newsletter = () => {
  return (
<Form className='form' method='POST'>
      <h2>News Letter</h2>
      <div className="form-row">
        <label htmlFor="name" className="form-label" >name</label>
        <input type="text"  name ="name" defaultValue="Arsha" className='form-input'/>
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text"  name ="lastName" defaultValue="Suresh" className='form-input'/>
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text"  name ="email" defaultValue="test@test.com" className='form-input'
        
        />
      </div>
      <div className="form-row">
        <button type="submit" className="btn btn-block">Submit</button>
      </div>
      </Form>  )
}
export default Newsletter;
