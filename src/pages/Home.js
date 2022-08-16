import { StyledTitle, StyledSubTitle, Avatar , StyledButton , ButtonGroup } from "../components/Styles";


//logo 
import Logo from "./../assets/logo.png";


const Home = () => {
    return (
        <div>
            <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                backgroundColor: "transparent",
                width: "100%",
                padding: "15px",
                display: "flex",
                justifyContent: "flex-start",

            }}>
                <Avatar image={Logo}></Avatar>

            </div>
                <StyledTitle size={65}>
                    Welcome To HappySpace_
                </StyledTitle>
                
                <StyledSubTitle size={27}>
                    Feel free to explore our page
                </StyledSubTitle>

                <ButtonGroup>
                    <StyledButton to="/login">LOGIN</StyledButton>
                    <StyledButton to ="/signup">SIGNUP</StyledButton>
                </ButtonGroup>
        </div>
    );
}

export default Home;