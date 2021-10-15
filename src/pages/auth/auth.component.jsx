import './auth.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
const AuthPage = () => (
    <div>
        <div className='auth-page'>
        <SignIn />
        <SignUp />

        </div>
   
    </div>

)

export default AuthPage