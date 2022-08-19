//styled components
import {
    StyledTextInput, StyledFormArea, StyledFormButton, StyledLabel,
    Avatar, StyledTitle, colors , ButtonGroup, ExtraText , TextLink , CopyrightText
} from './../components/Styles'

import Logo from './../assets/logo.png';

//formik
import {Formik , Form} from 'formik';
import {TextInput} from "./../components/FormLib";
import * as Yup from 'yup';

//icons
import {FiMail , FiLock} from 'react-icons/fi';
import { useParams } from 'react-router-dom';

//loader
//import Loader from 'react-loader-spinner';
//import { Audio } from  'react-loader-spinner';

const Login = () => {
    return (
        <div>
            <StyledFormArea>
                <Avatar image={Logo} />
                <StyledTitle color={colors.theme} size ={30}>Login</StyledTitle>

                <Formik
                    initialValues={{
                        email: "",
                        password : "",
                    }}

                    validationSchema = {
                        Yup.object({
                            email: Yup.string().email("Invalid email address")
                            .required("Required"),
                            password : Yup.string()
                                .min(8,"Password is too short")
                                .max(30,"Password is too long")
                                .required("Required"),
                        })
                    }

                    onSubmit={(values , {setSubmitting}) => {
                        console.log(values);
                    }} 
                >
                    {({isSubmitting}) => (
                       <Form>
                            <TextInput
                                name = "email"
                                type = "text"
                                label = "Email Address"
                                placeholder = " olga1@gmail.com"
                                icon = {<FiMail/>}
                            />


                            <TextInput
                                name = "password"
                                type = "password"
                                label = "Password"
                                placeholder = "**********"
                                icon = {<FiLock/>}
                            />

                            <ButtonGroup>
                                {/*{!isSubmitting && */}
                                <StyledFormButton type="submit">
                                    Login
                                </StyledFormButton>

                                {/* {isSubmitting && (
                                    <Loader 
                                        type = "ThreeDots"
                                        color = {colors.theme}
                                        height = {49}
                                        width ={100}
                                    />
                                )} */}
                            </ButtonGroup>


                       </Form> 
                    )}
                </Formik>
                <ExtraText>
                    New here? <TextLink to ="/Signup">SignUp</TextLink>
                </ExtraText>
            </StyledFormArea>

            <CopyrightText>
                All rights reserved &copy;2022
            </CopyrightText>
        </div>
    )
}

export default Login;