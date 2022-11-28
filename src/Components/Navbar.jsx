import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div  className="flex  justify-evenly mt-7 z-10 w-full fixed text-white">
        <div  className='cursor-pointer text-3xl font-mono'>
          <Link to="/">SEARCHX</Link>
        </div>
        <div>
           <Link to="/search" class="hover:underline underline-offset-8"> Know More</Link>
        </div>
        </div>
    );
}

export default Navbar;