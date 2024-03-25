import img from "../../imgs/logo.png"
import styled from "styled-components"
import "@fontsource/lexend-deca";

const LogoStyled = styled.div`
    display: flex;

`
const ImgLogo = styled.img`
    margin-top: 20px;
`
const Name = styled.p`
    color: #9CC5A1;
    font-family: "Lexend Deca";
    font-size: 32px;
`
const NameVerde = styled.p`
    color: #FFFF;
    font-family: "Lexend Deca";
    font-size: 32px;
`
function Logo(){
    return (
        <LogoStyled>
            <ImgLogo
            src={img}
            alt="logo"
            height="70"
            className="logo-img"
            ></ImgLogo>
            <Name>Ath</Name><NameVerde>on</NameVerde>

        </LogoStyled>

    )


}


export default Logo