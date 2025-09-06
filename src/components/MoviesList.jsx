import { useState, useEffect } from "react"
import Search from "./Search"

const MoviesList = () => {

  const movies = [
    {
      title: 'Inception',
      genre: 'Fantascienza'
    },
    {
      title: 'Il Padrino',
      genre: 'Thriller'
    },
    {
      title: 'Titanic',
      genre: 'Romantico'
    },
    {
      title: 'Batman',
      genre: 'Azione'
    },
    {
      title: 'Interstellar',
      genre: 'Fantascienza'
    },
    {
      title: 'Pulp Fiction',
      genre: 'Thriller'
    },
  ]

  return (
    <div className="col-12">
      <h1 className="text-center mt-5">Lista Film</h1>
      <Search />
      <ul className="list-unstyled mt-5">
        {movies.map(movie => {
          return (
            <li className="mt-4 fs-3">
              <div className="card">
                <div className="card-title">Titolo: <strong>{movie['title']}</strong></div>
                <div className="card-text">Genere: <strong>{movie['genre']}</strong></div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MoviesList
