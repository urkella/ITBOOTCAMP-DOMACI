import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getQuoteById } from "../service";

const Quote = ({loggedIn}) => {
    const [quote, setQuote] = useState([])
    const history = useHistory()

    let { id } = useParams()

    useEffect(() => {
        let mounted = true

        if (!loggedIn) {
            history.push('/login')
            return
        }

        getQuoteById(id).then(res => {
            if (mounted)
                setQuote(res.data)
        })

        return () => mounted = false
    }, [])

    return (
    <div>
        <p>{quote.id}</p>
        <p>{quote.text}</p>
        <p>{quote.author}</p>
    </div>);
}

export default Quote;