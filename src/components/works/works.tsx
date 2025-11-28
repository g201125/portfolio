"use client"


import React, { useState } from 'react';
import Image from 'next/image';

type Category = 'all' | 'landing' | 'corporate' | 'ecommerce';

interface WorkItem {
    id: number;
    category: Category;
    imageUrl: string;
    alt: string;
}


const worksData: WorkItem[] = [
    { id: 1, category: 'all', imageUrl: '/img1.png', alt: 'Work 1' },
    { id: 2, category: 'landing', imageUrl: '/img2.png', alt: 'Work 2' },
    { id: 3, category: 'corporate', imageUrl: '/img3.png', alt: 'Work 3' },
    { id: 4, category: 'all', imageUrl: '/img4.png', alt: 'Work 4' },
    { id: 5, category: 'ecommerce', imageUrl: '/img5.png', alt: 'Work 5' },
    { id: 6, category: 'all', imageUrl: '/img6.png', alt: 'Work 6' },
];

const categories: { key: Category; label: string }[] = [
    { key: 'all', label: 'Все работы' },
    { key: 'landing', label: 'Лендинги' },
    { key: 'corporate', label: 'Корпоративные' },
    { key: 'ecommerce', label: 'E-commerce' },
];

const Works: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<Category>('all');
    const [visibleCount, setVisibleCount] = useState(6);


    const filteredWorks = worksData.filter(
        (work) => selectedCategory === 'all' || work.category === selectedCategory
    );


    const visibleWorks = filteredWorks.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-gray-50">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-900">Мои работы</h2>

                <nav className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => {
                                setSelectedCategory(cat.key);
                                setVisibleCount(6);
                            }}
                            className={`
                                px-6 py-2 rounded-full transition-all duration-300 text-sm font-medium
                                ${cat.key === selectedCategory
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                                    : 'bg-white text-gray-600 hover:bg-gray-100'
                                }
                            `}
                        >
                            {cat.label}
                        </button>
                    ))}
                </nav>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {visibleWorks.map((work) => (
                        <div key={work.id} className="relative aspect-square group overflow-hidden rounded-xl shadow-md bg-white">
                            <Image
                                src={work.imageUrl}
                                alt={work.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="text-white font-medium px-4 py-2 border border-white rounded-lg">
                                    Посмотреть
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {visibleCount < filteredWorks.length && (
                    <button
                        onClick={handleLoadMore}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                    >
                        Загрузить еще
                    </button>
                )}
            </div>
        </section>
    );
};

export default Works;