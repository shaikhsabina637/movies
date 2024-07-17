import React, { useEffect, useState } from 'react';
import { CgArrowTopRight, CgWebsite } from "react-icons/cg";
import { BsFillStarFill } from "react-icons/bs";
import { PiSubtitles } from "react-icons/pi";
import { toast } from 'react-toastify';
import axios from 'axios';

function HeroSection() {
  const [movieListings, setMovieListings] = useState([]);
  
  const fetchMovies = async () => {
    try {
      const response = await axios.get('https://dummyapi.online/api/movies');
      setMovieListings(response.data);
    } catch (error) {
      toast.error("Problem In Data Fetching");
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  console.log(movieListings);

  return (
    <div className='w-full h-full py-5 px-3 flex justify-center flex-col gap-4 items-center'>
      <div className='w-full py-5 px-6'>
        <h1 className='text-4xl capitalize font-bold italic mb-3'>
          find your <span className='text-blue-300'>new movies</span> today
        </h1>
        <p className='capitalize lg:text-2xl md:text-xl sm:text-xl mb-3'>
          thousands of movies only on moviesapi...
        </p>
        <p className='capitalize text-xl mb-3'>
          make your entertainment fun and horror <span className='capitalize font-bold text-blue-300 italic'> with movies</span>
        </p>
        <button className='bg-blue-300 rounded-md capitalize py-3 px-2'>more about us</button>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-2xl font-bold capitalize'>tops related and trending movies</p>
        <p className='text-4xl lg:block md:block sm:block xs:hidden'><CgArrowTopRight /></p>
      </div>
      <div className='flex justify-evenly gap-4 items-center flex-wrap py-9 px-4 sm:flex-col lg:flex-row md:flex-col xs:flex-col '>
        {movieListings.map((item) => (
          <div className='bg-blue-300 py-4 px-4 rounded-md flex flex-col gap-2 lg:w-[25vw] sm:w-full' key={item.id}>
            <div>
              <img src={item.image} alt={item.movie} className="w-full h-auto"/>
            </div>
            <div className='flex gap-3 items-center'>
              <p><PiSubtitles/></p>
              <p className='capitalize'>{item.movie}</p>
            </div>
            <div className='flex gap-3 items-center'>
              <p><BsFillStarFill /></p>
              <p className='capitalize'>{item.rating}</p>
            </div>
            <div className='flex items-center gap-3'>
              <p><CgWebsite /></p>
              <p className='capitalize text-blue-800'><a href={item.imdb_url} target="_blank" rel="noopener noreferrer">{item.imdb_url}</a></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
