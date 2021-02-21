import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllQuotes } from "../service"

const Quotes = ({ loggedIn }) => {
    const [quotes,setQuotes] = useState([])
    const history = useHistory()

    useEffect(() => {
        let mounted = true

        if(!loggedIn){
            history.push('/login')
            return
        }

        getAllQuotes().then(res => {
            if(mounted)
                setQuotes(res.data)
        })

        return () => mounted = false
    },[])

    return (
        <>
            {quotes.map(quote =>
            <div style={{ margin: '10px 0' }}>
                <Link to={`/quotes/${quote.id}`} key={quote.id}>{quote.text}</Link>
            </div>)}
        </>
    )
}

export default Quotes