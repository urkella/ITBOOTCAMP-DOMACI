import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../service"

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        let mounted = true;

        getAllProducts().then(res => {
            if (mounted) {
                setProducts(res.data);
            }
        })

        return () => mounted = false
    },[])

    return (
        <>
            {products.map((product) => {
                const name = `${product.name} --- ${product.category}`;
                return (
                <div key={product.id} style={{ margin: '10px 0' }}>
                        <Link to={`/products/${product.id}`}>{name}</Link>
                </div>
                )
            })}
        </>
    )
}

export default Products;