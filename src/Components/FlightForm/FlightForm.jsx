import './FlightForm.css'
import facebook from '../../assets/images/Facebook.png'
import google from '../../assets/images/google.png'
import apple from '../../assets/images/apple.png'
import email from '../../assets/images/email.png'
const FlightForm = () => {
    return (
    <section className='Aya-Flight-Form'>
    <div className="Form-Part1">
        <p className='Login-Or-Signup'>Login or Sign up to book</p>
        <input className='PhoneNumber' type="number" placeholder='Phone Number' />
        <p className='Text'>We’ll call or text you to confirm your number. Standard message and data rates apply. <span>Privacy Policy</span></p>
        <button className='Continue'><span>Continue</span></button>
    </div>
    <div className="Form-Part2">
        <p className='Line1'></p>
        <p className='or'>Or</p>
        <p className='Line2'></p>
    </div>
    <div className="Form-Part3">
        <button className='facebook'><img src={facebook} alt="Facebook" /></button>
        <button className='google'><img src={google} alt="google" /></button>
        <button className='apple'><img src={apple} alt="apple" /></button>
    </div>
    <div className="Form-Part4">
        <button className='Continue-with-email'>
            <img src={email} alt="email" />
            <span>Continue with email</span>
        </button>
    </div>
    </section>
    )
}

export default FlightForm