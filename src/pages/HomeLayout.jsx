import React from 'react'
import { Link, Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

 const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state==='loading';
  const value ="somevalue";
  return (
    <div>
        <header>
<Navbar/>    
    </header>
    <section className="page">
      {(isPageLoading)?(<div>Loading</div>):<Outlet context={value}/>}
    </section>
       
      
    </div>
  )
}
export default HomeLayout;