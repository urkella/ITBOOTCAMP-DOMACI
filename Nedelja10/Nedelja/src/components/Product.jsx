import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getProductById } from "../service";

const Quote = () => {
    const [quote, setQuote] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        let mounted = true;

        getProductById(id).then(res => {
            if (mounted)
                setQuote(res.data)
        })

        return () => mounted = false
    }, [])

    return (
    <div>
        <p>{quote.id}</p>
        <p>{quote.name}</p>
        <p>{quote.category}</p>
    </div>);
}

export default Quote;