import React from 'react';
import './Breadcrumb.css';

interface BreadcrumbItem {
    title: string;
    link?: string;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav aria-label="breadcrumb" className="breadcrumb">
            <ol>
                {items.map((item, index) => (
                    <li
                        key={index}
                        className={index === items.length - 1 ? 'breadcrumb-item active' : 'breadcrumb-item'}
                    >
                        {index === items.length - 1 ? <span>{item.title}</span> : <a href={item.link}>{item.title}</a>}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
