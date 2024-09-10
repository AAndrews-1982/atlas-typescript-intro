// src/components/CoverArt.tsx

import React from 'react';
import "../index.css";

interface CoverArtProps {
    coverArtUrl: string;
}

export default function CoverArt({ coverArtUrl }: CoverArtProps) {
    return (
        <div className="p-4 border border-gray-300 rounded-lg shadow-sm">
            <img 
                src={coverArtUrl} 
                alt="Cover Art" 
                className="rounded-lg w-full h-auto" 
            />
        </div>
    );
}
