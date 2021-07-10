import React from 'react';
import { LoginForm } from '../Components/Forms/loginForm';
import { Search } from '../Components/Navbar/search';
import {Container} from 'react-bootstrap/'

export const Login = () => {
    return( 
        <Container className="image-login"> 
            <Search/>
            <LoginForm/>
        </Container>
    )
}