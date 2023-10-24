import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import sendRequest from '../../../../utilities/send-request'
import { createPokemon } from '../../../../utilities/pokemon-api'

export default function ShowPage({ user }) {
    const { pokemonName } = useParams()
    const [pokemon, setPokemon] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        async function getPokemon() {
            const pokemon = await sendRequest(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            setPokemon(pokemon)
        }
        getPokemon()
    }, [])

    async function capturePokemon() {
        const pokemonToAdd = { name: pokemon.name, owner: user._id }
        await createPokemon(pokemonToAdd)
        navigate('/usersPokemon')
    }
    
    return (
        <>
        <h2>Show Page</h2>
        <h3>{pokemon.name}</h3>
        <button onClick={capturePokemon}>Capture Pokemon</button>
        </>
    )
}