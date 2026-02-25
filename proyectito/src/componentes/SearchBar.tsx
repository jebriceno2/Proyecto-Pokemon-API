"use client";

type SearchBarProps = {
    value: string;
    onSearch: (query: string) => void;
};

export default function SearchBar({ value, onSearch }: SearchBarProps) {
    return (
        <div className="mb-4">
            <input
                type="text"
                placeholder="Buscar Pokémon por nombre..."
                value={value}
                onChange={(e) => onSearch(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
        </div>
    );
}