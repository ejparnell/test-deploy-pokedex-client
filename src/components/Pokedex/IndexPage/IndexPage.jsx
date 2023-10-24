import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import sendRequest from '../../../../utilities/send-request'

export default function IndexPage() {
    const [pokemon, setPokmon] = useState([])

    useEffect(() => {
        async function getPokemon() {
            const pokemon = await sendRequest('https://pokeapi.co/api/v2/pokemon?limit=150')
            setPokmon(pokemon.results)
        }
        getPokemon()
    }, [])

    return (
        <>
        {pokemon.map(pokemon => (
            <div key={pokemon.name}>
                <Link to={`/${pokemon.name}`}>{pokemon.name}</Link> 
            </div>
        ))}
        </>
    )
}