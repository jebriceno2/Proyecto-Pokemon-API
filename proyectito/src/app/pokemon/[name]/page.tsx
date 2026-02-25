// src/app/pokemon/[name]/page.tsx
import Link from "next/link";
import { fetchPokemonDetails } from "@/lib/pokeapi";
import Image from "next/image";

type Props = {
  params: Promise<{ name: string }>;
};

export default async function PokemonDetailPage({ params }: Props) {
  const { name } = await params;
  const pokemon = await fetchPokemonDetails(name);

  return (
    <main className="min-h-screen p-6 max-w-2xl mx-auto">
      <Link href="/" className="inline-block mb-4 underline">
        ← Volver
      </Link>

      <div className="border rounded-2xl p-6">
        <h1 className="text-3xl font-bold capitalize mb-4">{pokemon.name}</h1>

        <Image
          src={pokemon.sprites?.front_default}
          alt={pokemon.name}
          width={160}
          height={160}
        />

        <div className="mt-4">
          <h2 className="font-semibold mb-2">Tipos</h2>
          <div className="flex gap-2">
            {pokemon.types.map((t: unknown) => (
              <span
                key={t.type.name}
                className="px-3 py-1 border rounded-full capitalize text-sm"
              >
                {t.type.name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="font-semibold mb-2">Stats</h2>
          <ul className="space-y-1">
            {pokemon.stats.map((s: unknown) => (
              <li key={s.stat.name} className="flex justify-between">
                <span className="capitalize">{s.stat.name}</span>
                <span>{s.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}