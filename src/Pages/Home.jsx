import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';

const Home = () => {
    return (
        <div >
            <Navbar/>
           <Banner/>
           <div className='z-10 fixed top-1/2 left-1/2 '>
           <button className='cursor-pointer text-3xl text-white  border-solid border-2 border-white-600 p-5 hover:bg-white hover:text-black'>
            <Link to="/search">KNOW MORE </Link>
            </button>
           </div>
         
        </div>
    );
}

export default Home;