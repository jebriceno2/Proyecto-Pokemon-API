// src/app/page.tsx
import PokedexClient from "@/componentes/PokedexClient";
import { fetchPokemonList } from "@/lib/pokeapi";

export default async function HomePage() {
  const data = await fetchPokemonList(1500, 0);

  // data.results = [{ name, url }]
  // Sacamos ID desde el índice para armar imagen
  const pokemons = data.results.map((pokemon: { name: string }, index: number) => {
    const id = index + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return {
      name: pokemon.name,
      image,
    };
  });

  return (
    <main className="bg-white min-h-screen p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">Mini Pokédex</h1>
      <p className="mb-6 text-sm opacity-80 text-black">
        Busca un Pokémon y haz click para ver su detalle.
      </p>

      <PokedexClient initialPokemons={pokemons} />
    </main>
  );
}