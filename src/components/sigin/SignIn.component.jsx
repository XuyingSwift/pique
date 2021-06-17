import React from 'react';
import * as s from './SignIn.styles';
import FormInput from '../formInput/FormInput.compoent'
import CustomButton from '../customButton/CustomButtom.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils'


class SignIn extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        email: '',
        password: ''
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
      const { email, password } = this.state;
    
          try {
              await auth.signInWithEmailAndPassword(email, password);
              this.setState({ email: '', password: '' });
          
          } catch (error) {
              console.log(error);
          }
      };

    handleChange = event => {
      const { value, name } = event.target;

      this.setState({ [name]: value });
    };
  
    render() {
        return (
            <s.SignInContainer>
              <s.SignInTitle>I already have an account</s.SignInTitle>
              <span>Sign in with your email and password</span>
      
              <form onSubmit={this.handleSubmit}>
                <FormInput
                  name='email'
                  type='email'
                  value={this.state.email}
                  handleChange={this.handleChange}
                  label='email'
                  required
                />
                <FormInput
                  name='password'
                  type='password'
                  value={this.state.password}
                  handleChange={this.handleChange}
                  label='password'
                  required
                />
                <s.ButtonGroupContainer>
                  <CustomButton type='submit'> Sign in </CustomButton>
                  <CustomButton type='button'  onClick={signInWithGoogle} isGoogleSignIn>
                    Sign in with Google
                  </CustomButton>
                </s.ButtonGroupContainer>
              </form>
            </s.SignInContainer>
          );
    }

        
  }
  
  export default SignIn;