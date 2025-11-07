import React, { useEffect, useState } from 'react';
import "../App.css";
import Loader from './Loader';

const MoviesList = () => {
    const [kino, setKino] = useState([]);

    useEffect(() => {
        const api = `https://www.omdbapi.com/?s=panda&apikey=c65fcde9`;

        fetch(api)
            .then((res) => res.json())
            .then((data) => setKino(data.Search));
    },[]);
    
    console.log(kino);
  return (
    <div>
      <h1>Movie</h1>

      <table>
        <thead>
          <tr>
            <th>T/R</th>
            <th>Name</th>
            <th>Year</th>
            <th>Type</th>
            <th>imdbId</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
        {kino.length > 0 ? (
          kino.map((item, index) => (
          <tr key={index}>
            <td className='title'>{index + 1}</td>
            <td className='title'>{item.Title}</td>
            <td className='title'>{item.Year}</td>
            <td className='title'>{item.Type}</td>
            <td className='title'>{item.imdbID}</td>
            <td>
              <img src={item.Poster} alt="" />
            </td>
          </tr>
        ))
          ) : ( 
            <tr> 
              <td>
                <Loader/>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}

export default MoviesList
