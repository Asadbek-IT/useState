import React, { useEffect, useState } from "react";
import "../App.css";
import Loader from "./Loader";

const MoviesList = () => {
  const [kino, setKino] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const api = `https://www.omdbapi.com/?s=Puss in Boots&apikey=c65fcde9`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setKino(data.Search));
  }, []);

  // handleChange

  const handlChange = (e) => {
    setName(e.target.value);
  };

  //onSubmit

  const handleSearch = async (e) => {
    e.preventDefault();
    await fetch(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`).then(
      (res) => res.json().then((data) => setKino(data.Search))
    );
  };
  return (
    <div>
      <h1 className="title">Movie</h1>

      <form onSubmit={handleSearch}>
        <input
          onChange={handlChange}
          value={name}
          className="input"
          type="search"
          placeholder="Write name of film"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>

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
                <td className="title">{index + 1}</td>
                <td className="title">{item.Title}</td>
                <td className="title">{item.Year}</td>
                <td className="title">{item.Type}</td>
                <td className="title">{item.imdbID}</td>
                <td>
                  <img src={item.Poster} alt="" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                <Loader />
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MoviesList;
