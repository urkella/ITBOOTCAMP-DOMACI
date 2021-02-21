import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getAllProducts } from "../service";

const ProductByCategory = () => {
    const [categories, setCategories] = useState([]);
    let { category } = useParams();

    useEffect(() => {
        let mounted = true;

        getAllProducts().then(res => {
            if (mounted) {
                const filtered = res.data.filter(i => category === i.category);
                setCategories(filtered);
            }
        })

        return () => mounted = false
    }, [])

    return (
    <div>
            {categories.map(product => {
                return (
                    <div key={product.id}>
                        <p>{`${product.name} --- ${product.category}`}</p>

            </div>
        )
    })}  
    </div>);
}

export default ProductByCategory;