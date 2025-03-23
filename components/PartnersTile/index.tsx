import { SanityBlock } from "@/lib/sanity/types";
import { PortableText } from "@portabletext/react";


interface PartnerTileProps {
    name: string;   
    contact: SanityBlock[];
    state: string;
    city: string;
}


const PartnerTile = ({name, contact, state, city}: PartnerTileProps) => {
    return(
        <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200 w-64 transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <h2 className="text-xl font-semibold">{name}</h2>
            <p className="text-gray-600">{state} - {city}</p>
            <div className="mt-2 text-gray-700">
                <PortableText value={contact} />
            </div>
        </div>
    )
}

export default PartnerTile