import { useEffect, useState } from 'react'
import { fetchAllCharacters } from '../api/character'
import CharacterCard from './CharacterCard'

export default function CharacterGrid() {
  const [characters, setCharacters] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadCharacters() {
      try {
        const data = await fetchAllCharacters()
        setCharacters(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadCharacters()
  }, [])

  if (loading) return <p className="text-center">Carregando personagens...</p>
  if (error) return <p className="text-center text-red-500">Erro: {error}</p>

  return (
    <section className="bg-parchment py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {characters.map((char) => (
          <CharacterCard
            key={char.id}
            name={char.name}
            bounty={char.bounty}
            crew={char.crew}
          />
        ))}
      </div>
    </section>
  )
}
