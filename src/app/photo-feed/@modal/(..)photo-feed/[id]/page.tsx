import Image from 'next/image';
import React from 'react';
import { images, imageType } from '../../../images';

export default function page({ params: { id } }: { params: { id: string } }) {
    const photo: imageType = images.find((p) => p.id === id)!;
    return (
        <div className="container mx-auto">
            <Image alt={photo.name} src={photo.src} width={200} height={200} />
            <small>{photo.caption}</small>ddd
        </div>
    );
}
