import { Link } from 'react-router-dom'

export const FilterMenu = ({ categories, selectedCategory, setSelectedCategory }) => {
    return (
        <nav className="categoryMenu">
            <Link
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? 'active' : ''}
            >
                All
            </Link>
            {categories.map(category => (
                <Link
                    key={category.id}
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 'active' : ''}
                >
                    {category.name}
                </Link>
            ))}
        </nav>
    )
}
