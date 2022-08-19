import { StyledTitle, StyledSubTitle, Avatar , StyledButton , ButtonGroup , StyledFormArea ,colors } from "../components/Styles";


//logo 
import Logo from "./../assets/logo.png";


const Dashboard = () => {
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
            <StyledFormArea bg={colors.dark2}>
                <StyledTitle size={65}>
                    Welcome User
                </StyledTitle>
                
                <StyledSubTitle size={27}>
                    Feel free to explore our page
                </StyledSubTitle>

                <ButtonGroup>
                    <StyledButton to="#">LOGOUT</StyledButton>
                </ButtonGroup>
            </StyledFormArea>
        </div>
    );
}

export default Dashboard;