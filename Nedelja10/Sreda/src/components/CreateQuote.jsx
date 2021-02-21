import { useState } from "react"
import { Redirect, useHistory } from "react-router"
import { addQuote } from "../service"

const CreateQuote = ({ loggedIn }) => {
    const [quote,setQuote] = useState('')
    const [author,setAuthor] = useState('')
    const history = useHistory()

    return loggedIn ? (
        <form onSubmit={e => {
            e.preventDefault()
            addQuote(quote,author).then(() => {
                history.push('/quotes')
            })
        }}>
            <input type="text" placeholder="quote..." onChange={e => setQuote(e.target.value)} />
            <input type="text" placeholder="author..." onChange={e => setAuthor(e.target.value)} />
            <input type="submit" value="Add Quote"/>
        </form>
    )
    :
    <Redirect to="/login" />

}

export default CreateQuote