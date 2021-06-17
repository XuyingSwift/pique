import React from 'react';
import * as s from './SignInAndSignUpPage.styles';
import SignIn from '../../components/sigin/SignIn.component'
import SignUp from '../../components/signup/SignUp.component'
import SubHeader from '../../components/subHeader/SubHeader.component';

const SignInAndSignOutPage= () => {
    return(
       <s.LoginPageContainer>
            <SubHeader/>
            <s.Group>
                <SignIn/>
                <SignUp/>
            </s.Group>
       </s.LoginPageContainer>
    )
}

export default SignInAndSignOutPage;