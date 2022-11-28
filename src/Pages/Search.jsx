import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
const Search = (props) => {
    const [text,setText] = useState("ships");
    const [shipList,setData] = useState([]);
    const [total,setTotal] = useState();
    const [page,setCurrentPage] = useState(1);
    const [lastPage,setLastPage] = useState();
    const [limit,setPageLimit] = useState(10);
    
    const handleSearch = () => {


      axios.get(`https://api.spacexdata.com/v3/${text}`)
      .then(res => {
        const data = res.data;
        console.log(data)
        setTotal(data.length)
        setData(data.slice((page - 1) * limit, page * limit));
        setLastPage(Math.ceil(data.length/limit))
        
      })

      .catch(error=>console.log(error))
       
        }

    React.useEffect(handleSearch,[page,limit,text])
  return (
    <div >
      <div id="navbar">  
      <Link to="/">Home</Link>
        </div>

        <div id='searchDiv'>
        <input value={text} type="text" onChange={(e) => {setText(e.target.value)}}/>
        <button onClick={()=>{handleSearch(); setCurrentPage(1)}}>SEARCH</button>
        </div>

        <div id="sortOption">
        <h2>Showing {total} available repository results </h2>    
       
        <div>
        <label>
        Per Page: 
        <select defaultValue={9} onChange={(e)=>{setPageLimit(e.target.value)}}>
          <option value={3}>3</option>
          <option  value={9}>9</option>
          <option value={20}>20</option>
        </select>
       
   </label>
       </div>
       </div>
      <div>
        {shipList.map((e)=>{
                  
                  return (
                      
                    <div id="result">
                        <a href={e.url} target="_blank">{e.ship_name}</a>
                  </div>
                  )
       
              })}
          
      </div>
      <div id="navBtn">
            <button onClick={()=>{setCurrentPage((page-1))}} disabled={page === 1}>PREVIOUS</button>
            <h4>{page} / {lastPage}</h4>
            <button onClick={()=>{setCurrentPage((page+1))}} disabled={page === lastPage}>NEXT</button>
      </div>
      
    </div>
  );
}

export default Search;