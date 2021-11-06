import React, { useState, useEffect } from "react";
import { requests } from "./requests";
import axios from "./axios";
import "./Banner.css"
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginal);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ]
      );
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str,n){
      return str?.length>n ? str.substr(0,n-1)+"...":str;
  }

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner-contents">
          <h1 className="banner-title">{movie?.title||movie?.name||movie?.original_name}</h1>
          <div className="banner-buttons">
            <button className="banner-button">Play</button>
            <button className="banner-button">My List</button>
          </div>
          <h1 className="banner-description">{truncate( movie?.overview,150)}</h1>

        </div>
        <div className="banner-fadebottom"></div>
      </header>
    </>
  );
}

export default Banner;
