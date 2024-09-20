import { notFound } from 'next/navigation';
import React from 'react';

export default function pageDetails({ params }: { params: { productId: string } }) {
    if (parseInt(params.productId) > 100) {
        return notFound();
    }
    return <div>pageDetails {params.productId}</div>;
}
