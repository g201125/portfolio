
"use client"


import React, { useState } from 'react';

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

    // Фильтрация по категории
    const filteredWorks = worksData.filter(
        (work) => selectedCategory === 'all' || work.category === selectedCategory
    );

    // Работы, которые сейчас отображаются
    const visibleWorks = filteredWorks.slice(0, visibleCount);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3); // загружать еще 3 работы
    };

    return (
        <section style={{ maxWidth: 800, margin: '0 auto', padding: 20, textAlign: 'center' }}>
            <h2 style={{ fontWeight: 'bold', marginBottom: 20 }}>Мои работы</h2>

            {/* Категории */}
            <nav style={{ marginBottom: 20 }}>
                {categories.map((cat) => (
                    <button
                        key={cat.key}
                        onClick={() => {
                            setSelectedCategory(cat.key);
                            setVisibleCount(6); // сбросить количество при смене категории
                        }}
                        style={{
                            marginRight: 15,
                            border: 'none',
                            background: 'none',
                            fontWeight: cat.key === selectedCategory ? 'bold' : 'normal',
                            color: cat.key === selectedCategory ? '#0046d5' : '#000',
                            cursor: 'pointer',
                        }}
                    >
                        {cat.label}
                    </button>
                ))}
            </nav>

            {/* Сетка работ */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: 15,
                    marginBottom: 20,
                }}
            >
                {visibleWorks.map((work) => (
                    <img
                        key={work.id}
                        src={work.imageUrl}
                        alt={work.alt}
                        style={{ width: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }}
                    />
                ))}
            </div>

            {/* Кнопка загрузить еще */}
            {visibleCount < filteredWorks.length && (
                <button
                    onClick={handleLoadMore}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: '#0046d5',
                        color: '#fff',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: 4,
                    }}
                >
                    Загрузить еще
                </button>
            )}
        </section>
    );
};

export default Works;