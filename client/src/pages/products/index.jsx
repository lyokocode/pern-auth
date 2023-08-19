import "../../styles/products/index.scss"
import useFetch from "../../hooks/useFetch"
import { FilterMenu, ProductItem, TabMenu } from "../../components"
import { useState } from "react"

export const Products = () => {

    const { data: products, loading, error, reFetch } = useFetch(`http://localhost:5000/api/product`)
    const { data: categories } = useFetch(`http://localhost:5000/api/category`)

    const [selectedCategory, setSelectedCategory] = useState(null); // Seçili kategoriyi saklayan state

    const filteredProducts = selectedCategory
        ? products.filter(product => product.CategoryId === selectedCategory.id)
        : products;

    if (loading) return "loading"
    if (error) return "there is a problem"

    return (
        <section className='products'>

            {/* Title  */}
            <div className="title">
                <h1 >All Products</h1>
            </div>

            {/* Tab Menu  */}
            <TabMenu reFetch={reFetch} />

            {/* Category Menu */}
            <FilterMenu
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            {/* Product List  */}
            <main className="productContainer">
                <div className="productContent ">
                    {/* product1 */}
                    {filteredProducts && filteredProducts.map(product => (
                        <ProductItem key={product.id} product={product} reFetch={reFetch} />
                    ))}
                </div>
            </main>

        </section>
    )
}
