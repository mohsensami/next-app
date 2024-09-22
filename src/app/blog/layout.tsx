import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Blog',
    description: 'Blog description',
};
export default function ProductLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container">
            <div className="grid grid-cols-4">
                <div className="col-span-3">{children}</div>
                <div className="col-span-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sit eos modi nisi veritatis, ducimus,
                    animi odio quod adipisci enim eius cumque ullam ratione aspernatur, eaque excepturi obcaecati non
                    repellat.
                </div>
            </div>
        </div>
    );
}
