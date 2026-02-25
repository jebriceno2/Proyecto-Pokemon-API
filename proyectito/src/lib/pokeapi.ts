// src/lib/pokeapi.ts
const BASE_URL = "https://pokeapi.co/api/v2";

export async function fetchPokemonList(limit: number = 20, offset: number = 0) {
    const response = await fetch(`${BASE_URL}/pokemon?limit=${limit}&offset=${offset}`, {
        next: { revalidate: 3660 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
        throw new Error("No se pudo cargar la lista de Pokemon");
    }

    return response.json();
}
export async function fetchPokemonDetails(name: string) {
    const response = await fetch(`${BASE_URL}/pokemon/${name}`, {
        next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
        throw new Error(`No se pudo cargar los detalles de ${name}`);
    }

    return response.json();

}