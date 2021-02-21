import { registerUser } from "../service"
import { useRegister } from "../useRegister"
import { getAllUsers } from '../service'
import { useHistory } from 'react-router-dom'


const validPassword = (password) => password.length >= 8 
                                 && password.split('').some(char => !isNaN(Number(char)))
                                 && password.split('').some(char => (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))


const Register = () => {
    const [username,setUsername,email,setEmail,password,setPassword] = useRegister()
    const history = useHistory()

    return (
        <form onSubmit={e => {
            e.preventDefault()
            if(username.length < 4 && !validPassword(password)){
                console.log('Неисправно, username макар 4, password 8 карактера, једно слово, један број')
                return
            }
            getAllUsers().then(res => {
                if(!res.data.some(user => user.username === username || user.email === email)){
                    registerUser(username,email,password).then(res => {
                        history.push('/login')
                    })
                }
                else{
                    console.log('Корисник већ постоји')
                }
            })
        }}>
            <input type="text" placeholder="username..." onChange={e => setUsername(e.target.value)}/>
            <input type="email" placeholder="email..." onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="password..." onChange={e => setPassword(e.target.value)} />
            <input type="submit" value="Register" />
        </form>
    )
}

export default Register