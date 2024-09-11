// src/components/CoverArt.tsx

import { useEffect, useState, useContext } from 'react';
import "../index.css";
import placeholder from '../assets/placeholder.svg';

interface CoverArtProps {
    coverArtUrl: string;
}

export default function CoverArt({ coverArtUrl }: CoverArtProps) {
    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <img 
                src={coverArtUrl || placeholder} // uses URL otherwise placeholder 
                alt="Cover Art" 
                className="rounded-lg w-full h-auto" 
            />
        </div>
    );
}
