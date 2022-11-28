import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Search = () => {
  const [text, setText] = useState("");
  const [searchFilter, setSearchFilter] = useState("")
  const [shipList, setData] = useState([]);
  const [total, setTotal] = useState();
  const [page, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState();
  const [limit, setPageLimit] = useState(9);

  const handleSearch = () => {
    const options = {
      method: "GET",
      url: `https://api.spacexdata.com/v3/capsules?${searchFilter}=${text}`,
    };

    axios
      .request(options)
      .then((res) => {
        const data = res.data;
        console.log(data);
        setTotal(data.length);
        setData(data.slice((page - 1) * limit, page * limit));
        setLastPage(Math.ceil(data.length / limit));
      })
      .catch((error) => console.log(error));
  };
  // eslint-disable-next-line
  React.useEffect(handleSearch, [page, limit]);
  return (
    <div>
      <div className="flex  justify-evenly mt-7 w-full text-white">
        <div className="cursor-pointer text-3xl font-mono">
          <Link to="/">SEARCHX</Link>
        </div>
        <div>
          <Link to="/search" class="hover:underline underline-offset-8">
            
            Know More
          </Link>
        </div>
      </div>
      <div id="searchDiv" className="flex justify-center mt-10">
        <input
          value={text}
          type="text"
          onChange={(e) => {
            setText(e.target.value);
          }}
          placeholder={"Type search keywords"}
          className="px-7  mr-5 text-gray-600"
        />
        <button
          onClick={() => {
            handleSearch();
            setCurrentPage(1);
          }}
          className="cursor-pointer text-xl text-white  border-solid border-2 border-white-600 p-2 hover:bg-white hover:text-black"
        >
          SEARCH
        </button>
      </div>
      <div className="flex justify-center items-center">
        <label className="mr-1 font-bold">Search by:  &nbsp;</label> 
        <input type="radio" onChange={(e) => {setSearchFilter(e.target.value)} } name="filterSearchOption" value="status"/> &nbsp;  Status &nbsp;
        <input type="radio" onChange={(e) => {setSearchFilter(e.target.value)} } name="filterSearchOption" value="type"/> &nbsp;  Type &nbsp;
        <input type="radio" onChange={(e) => {setSearchFilter(e.target.value)} } name="filterSearchOption" value="landings"/> &nbsp;  No. of Landings
      </div>
      <div id="sortOption" className="flex justify-between p-3 ">
        <h2 className="text-2xl">
          Showing {total} available capsules results
        </h2>
        <div>
          <label>
            Per Page:
            <select
              className="text-black"
              defaultValue={9}
              onChange={(e) => {
                setPageLimit(e.target.value);
              }}
            >
              <option value={3}>3</option>
              <option value={9}>9</option>
              <option value={20}>20</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex justify-center p-3 w-full">
        <div >
          {total !== 0 ?
          <div className="grid grid-cols-3 grid-flow-row gap-2 w-full">
 {shipList.map((e) => {
            return (
              <div
                id="result"
                key={e.capsule_serial}
                className="flex-row justify-center p-3 w-full"
              >
                <h2 className="text-xl">Name: {e.capsule_serial} </h2>
                <p>
                  Id: {e.capsule_id} <br /> Status: {e.status} <br />
                  {e.details}
                </p>
              </div>
            );
          })}
          </div>
           :<div className="flex-col w-full justify-center text-center"> <img src="https://liferay-support.zendesk.com/hc/article_attachments/360032812672/success_state.gif" alt="No results found"/> <h2>Whoops! No results found</h2> </div>}
        </div>
      </div>
      <div id="navBtn" className="flex justify-center items-center">
        <button
          className="cursor-pointer text-lg text-white  border-solid border-2 border-white-600 p-1 mr-2"
          onClick={() => {
            setCurrentPage(page - 1);
          }}
          disabled={page === 1}
        >
          BACK
        </button>
        <p>
          {page} / {lastPage}
        </p>
        <button
          className="cursor-pointer text-lg text-white  border-solid border-2 border-white-600 p-1 ml-2"
          onClick={() => {
            setCurrentPage(page + 1);
          }}
          disabled={page === lastPage}
        >
          NEXT
        </button>
      </div>
    </div>
  );
};

export default Search;
