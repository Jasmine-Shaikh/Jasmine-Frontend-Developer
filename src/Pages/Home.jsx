import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div className='w-full'>
            <Navbar/>
           <Banner/>
           <div className='z-10 fixed flex right-1/4 top-1/2'>
     
            <Link to="/search" className='cursor-pointer mr-3 text-3xl text-white  border-solid border-2 border-white-600 p-5 hover:bg-white hover:text-black'> LEARN MORE </Link>
            <p>Learn more about spaceX capsules here. <br/> We are using the www.spacex.com API to fetch relevant data </p>
           </div>
         
        </div>
    );
}

export default Home;