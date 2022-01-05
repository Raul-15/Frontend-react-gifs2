import React, { useContext } from 'react'
import Gif from '../../components/Gif'
import useGlobalGifs from '../../hooks/useGlobalGifs'


export default function Detail({ params }) {
  // const staticcontext = useContext(StaticConext)
  // console.log(staticcontext)

  const gifs = useGlobalGifs()

  const gif = gifs.find(singleGif =>
    singleGif.id === params.id)

  console.log(gif)
  return <Gif {...gif} />
}