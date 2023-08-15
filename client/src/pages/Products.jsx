import "../styles/products.scss"
import { BiBookOpen, BiBookmark, BiRefresh, BiStar } from "react-icons/bi"
import { MdOutlineExplore } from "react-icons/md"
import useFetch from "../hooks/useFetch"
import { ProductItem } from "../components"

export const Products = () => {

    const { data, loading, error, reFetch } = useFetch(`http://localhost:5000/api/product`)

    if (loading) return "loading"
    if (error) return "there is a problem"

    return (
        <section className='products'>

            {/* Title  */}
            <div className="title">
                <h1 >All Products</h1>
            </div>

            {/* Tab Menu  */}
            <nav className="tabMenu">
                <a className="iconContainer ">
                    <BiBookmark size={20} />
                    <span>Architecto</span>
                </a>
                <a className="iconContainer">
                    <BiBookOpen size={20} />
                    <span>Corrupti</span>
                </a>
                <a className="iconContainer">
                    <BiStar size={20} />
                    <span>Excepturi</span>
                </a>
                <a className="iconContainer">
                    <MdOutlineExplore size={20} />
                    <span>Consectetur</span>
                </a>
                <button onClick={() => reFetch()} className="iconContainer">
                    <BiRefresh size={20} />
                    <span>Refresh Data</span>
                </button>
            </nav>

            {/* Product List  */}
            <main className="productContainer">
                <div className="productContent ">
                    {/* product1 */}
                    {data.length > 0 ? data.map(product => (
                        <ProductItem key={product.id} product={product} />
                    ))
                        : ("products not found")}

                    {/* product2 */}
                    {/* <article className="productCard">
                        <a href="#">
                            <div className="productInfo">
                                <img src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Hotel Photo" />
                                <div className="star ">
                                    <AiFillStar size={16} />
                                    <span className="num">4.9</span>
                                </div>
                            </div>

                            <div className="productDetail">
                                <h2 className="productName">The Hilton Hotel</h2>
                                <p className="place">Lisbon, Portugal</p>

                                <div className="info">
                                    <p className="price">$850</p>

                                    <div className="cart">
                                        <MdSettings size={14} />

                                        <button className="text-sm">Update</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article> */}

                </div>
            </main>



        </section>
    )
}
