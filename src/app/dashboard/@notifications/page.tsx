import Card from '@/components/Card';
import Link from 'next/link';
import React from 'react';

export default function Notifications() {
    return <Card>Notifications <Link href="/dashboard/archived">Archives</Link></Card>;
}
