import { useState, useEffect } from "react"

const Main = () => {

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

  const [selection, setSelection] = useState('');
  const [filterSelection, setFilterSelection] = useState(movies)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (selection !== '') {
      const filteredMovies = movies.filter(movie => {
        return (
          movie['genre'] === selection
        )
      })
      console.log(filteredMovies)
      setFilterSelection(filteredMovies);
    }
    else {
      setFilterSelection(movies)
    }
  }, [selection])

  useEffect(() => {
    if (search !== '') {
      const filterSearch = movies.filter(movie => {
        return (
          movie['title'].toLowerCase().includes(search.toLowerCase())
        )
      })
      setFilterSelection(filterSearch)
    }
    else {
      setFilterSelection(movies)
    }
  }, [search])

  return (
    <div className="col-12">
      <h1 className="text-center mt-5">Lista Film</h1>
      <form className="mt-5 d-flex" onSubmit={(e) => {
        e.preventDefault();
      }} >
        <input type="text" className="form-control me-4 fs-4" value={search} placeholder="Cerca titolo film" onChange={(e) => {
          setSearch(e.target.value)
        }} />
        <select name="" id="" value={selection} className="form-select fs-4" onChange={(e) => {
          setSelection(e.target.value)
        }}>
          <option value="">Seleziona genere</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>
      </form>
      <ul className="list-unstyled mt-5">
        {filterSelection.map((movie, index) => {
          return (
            <li className="mt-4 fs-3" key={index}>
              <div className="card">
                <div className="card-title m-2">Titolo: <strong>{movie['title']}</strong></div>
                <div className="card-text m-2">Genere: <strong>{movie['genre']}</strong></div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Main
