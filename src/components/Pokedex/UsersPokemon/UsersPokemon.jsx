import { useEffect, useState } from 'react'
import { getUserPokemon, updateNickname, deletePokemon } from '../../../../utilities/pokemon-api'
import PokemonForm from '../PokemonForm/PokemonForm'

export default function UsersPokemon({ user }) {
    const [pokemon, setPokemon] = useState([])
    const [nickname, setNickname] = useState('')

    useEffect(() => {
        async function getPokemon() {
            const pokemon = await getUserPokemon(user)
            setPokemon(pokemon)
        }
        getPokemon()
    }, [])

    function handleChange(event) {
        setNickname(event.target.value)
    }

    async function handleSubmit(event) {
        event.preventDefault()
        const updateData = { nickname }
        const updatedPokemon = await updateNickname(event.target.id, updateData)
        console.log(updatedPokemon)
        const updatedPokemonList = pokemon.map(pokemon => pokemon._id === updatedPokemon._id ? updatedPokemon : pokemon)
        setPokemon(updatedPokemonList)
    }

    async function handleDelete(event) {
        const deletedPokemon = await deletePokemon(event.target.id)
        const updatedPokemonList = pokemon.filter(pokemon => pokemon._id !== deletedPokemon._id)
        setPokemon(updatedPokemonList)
    }

    return (
        <>
        <h2>Users Pokemon</h2>
        {pokemon.map(pokemon => (
            <div key={pokemon._id}>
                <p>{pokemon.name}</p>
                {pokemon.nickname && <p>{pokemon.nickname}</p>}
                <PokemonForm 
                    pokemon={pokemon}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                />
                <button onClick={handleDelete} id={pokemon._id}>Release to wild</button>
            </div>
        ))}
        </>
    )
}