import React from 'react';
import { images } from './images';
import Link from 'next/link';
import Image from 'next/image';

export default function page() {
    return (
        <main className="container mx-auto">
            <h1>Wonders</h1>
            <div className="grid grid-cols-4 gap-4">
                {images.map(({ id, src, name }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image alt={name} src={src} className="w-full" width={400} height={200} />
                    </Link>
                ))}
            </div>
        </main>
    );
}
