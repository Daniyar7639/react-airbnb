import React from "react"
import "./SignUpForm.css"

export default function SignUPForm() {

    const [state, setState] = React.useState({
        email:"",
        password:"",
        passwordConfirm:"",
        isChecked:true
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setState(prevState => {
            return {
                ...prevState,
                [name]: type==="checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        state.password===state.passwordConfirm ? console.log("success password!") : console.log("password not match")
        state.isChecked && console.log('Thanks for signing up for our newsletter')
        event.preventDefault()
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={state.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={state.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={state.passwordConfirm}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="isChecked"
                        onChange={handleChange}
                        checked={state.isChecked}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}