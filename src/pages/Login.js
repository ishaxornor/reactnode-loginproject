//styled components
import {
    StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel,
    Avatar, StyledTitle
} from './../components/Styles'

import Logo from './../assets/logo.png';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle size ={30}>Member Login</StyledTitle>
            </StyledFormArea>
        </div>
    )
}

export default Login;