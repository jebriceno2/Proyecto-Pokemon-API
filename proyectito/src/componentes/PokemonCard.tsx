import Link from "next/link";
import Image from "next/image";

type PokemonCardProps = {
    name: string;
    image: string;
}

export default function PokemonCard({ name, image }: PokemonCardProps) {
    return (
        <Link href={`/pokemon/${name}`} className="bg-black rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-lg transition-shadow"
        >
            
            <Image src={image} alt={name} width={200} height={200} />
            <h3 className="text-lg font-semibold capitalize">{name}</h3>
        </Link>
    );
}