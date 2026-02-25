// src/componentes/PokedexClient.tsx
"use client";

import { useMemo, useState } from "react";
import PokemonCard from "./PokemonCard";
import SearchBar from "./SearchBar";

type PokemonListItem = {
  name: string;
  image: string;
};

type Props = {
  initialPokemons: PokemonListItem[];
};

export default function PokedexClient({ initialPokemons }: Props) {
  const [search, setSearch] = useState("");

  const filteredPokemons = useMemo(() => {
    return initialPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [initialPokemons, search]);

  return (
    <>
      <SearchBar value={search} onSearch={setSearch} />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.image}
          />
        ))}
      </div>
      {filteredPokemons.length === 0 && (
        <p className="mt-4 text-center">No se encontraron Pokémon 😢</p>
      )}
    </>
  );
}