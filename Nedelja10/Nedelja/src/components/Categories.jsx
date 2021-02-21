import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllProducts } from "../service"

const Categories = () => {
    const [categories,setCategories] = useState([])

    useEffect(() => {
        let mounted = true;

        getAllProducts().then(res => {
            if (mounted) {
                setCategories(res.data);
            }
        })

        return () => mounted = false
    }, [])

    return (
        <>
            {categories.map((product) => {
                return (
                <div key={product.id} style={{ margin: '10px 0' }}>
                        <Link to={`/products/categories/${product.category}`}>
                            {product.category}
                        </Link>
                </div>
                )
            })}
        </>
    )
}

export default Categories;