import { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import GifsContext from '../context/GifsContext'


export function useGifs({ keyword } = { keyword: null }) {
    const [loading, setLoading] = useState(false)
    //const [gifs, setGifs] = useState([])
    const { gifs, setGifs } = useContext(GifsContext)


    useEffect(function () {
        setLoading(true)
        // recuperamos la keyword del localstorage
        const keywordTouse = keyword || localStorage.getItem('lastKeyword') || 'random'

        getGifs({ keyword: keywordTouse })
            .then(gifs => {
                setGifs(gifs)
                setLoading(false)
                //Guardamos la keyword en el localstorage
                localStorage.setItem('lastKeyword', keyword)
            })
    }, [keyword, setGifs])
    return { loading, gifs }
}