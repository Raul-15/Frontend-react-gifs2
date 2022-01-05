import React, { useState, useEffect } from "react"
import { Link, useLocation } from "wouter"
import getGifs from '../../services/getGifs'
import ListOfGifs from '../../components/ListOfGifs'
import { useGifs } from "../../hooks/useGifs"


const POPULAR_GIFS = ["Matrix", "Venezuela", "Chile", "Colombia", "Ecuador"]

export default function Home() {
  const [keyword, setKeyword] = useState('')
  //const location = useLocation() // useLocation() => es un HOOK
  const [path, pushLocation] = useLocation()

  const { loading, gifs } = useGifs()
  const handleSubmit = evt => {
    evt.preventDefault()  // Para evitar refrescar la pagina
    // Navegar a otra ruta
    pushLocation(`/search/${keyword}`)
  }
  const handleChange = evt => {
    setKeyword(evt.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif..." />
        <button>Buscar</button>
      </form>
      <ListOfGifs gifs={gifs} />
      <h3 className="App-title">Los gifs más populares</h3>

      <ul>
        {POPULAR_GIFS.map((popularGif) => (
          <li key={popularGif}>
            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}