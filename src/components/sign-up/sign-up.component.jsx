import React from 'react'
import './sign-up.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-buttom.component'

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'
import {createUserWithEmailAndPassword} from 'firebase/auth'

class SignUp extends React.Component{
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

    }

    handleSubmit = async (event) => {
        event.preventDefautl()
        const {displayName, email, password, confirmPassword} = this.state
        
        if(password !== confirmPassword) {
            alert('Passwords do not match')
            return
        }

        try{
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const {userAuth} = userCredential.user
                createUserProfileDocument(userAuth, {displayName})
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                })
            })
        }catch(error) {
            console.error(error)
        }

    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <span>Sign up with email and password</span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value = {displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    ></FormInput>
                    <FormInput
                        type='email'
                        name='email'
                        value = {email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    ></FormInput>
                    <FormInput
                        type='password'
                        name='password'
                        value = {password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    ></FormInput>
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value = {confirmPassword}
                        onChange={this.handleChange}
                        label='confirm password'
                        required
                    ></FormInput>

                    <CustomButton type='submit'>Sign up</CustomButton>

                </form>

            </div>
        )

    }
}

export default SignUp