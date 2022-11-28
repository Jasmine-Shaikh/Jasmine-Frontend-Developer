import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Components/Banner';

const Home = (props) => {
    return (
        <div>
            <Link to="/search">Search</Link>
           <Banner/>
        </div>
    );
}

export default Home;