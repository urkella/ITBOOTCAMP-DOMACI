import { useState } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { getAllUsers } from "../service"

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();

    return (
        <>
            <form onSubmit={(e) => {
                e.preventDefault()
                getAllUsers().then(res => {
                    let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    if(user){
                        setUser(user)
                        history.push('/quotes')
                    }
                    else{
                        console.warn('Неисправни подаци')
                    }
                })
            }}>
                <input type="text" placeholder="Username..." onChange={e => setUsername(e.target.value)}/>
                <input type="password" placeholder="Password..." onChange={e => setPassword(e.target.value)}/>
                <input type="submit" value="Login" />
            </form>
            <div>
                <Link to='/register'>Not registered?</Link>
            </div>
        </>
    )
}

export default Login