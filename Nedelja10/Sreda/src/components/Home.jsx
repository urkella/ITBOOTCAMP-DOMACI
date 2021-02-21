import { Redirect } from "react-router"

const Home = ({ loggedIn }) => {
    return (
        loggedIn ? <Redirect to='/quotes' /> : <Redirect to='/login' />
    )
}

export default Home