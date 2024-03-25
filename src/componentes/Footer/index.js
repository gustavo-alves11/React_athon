import styled from "styled-components"
import Waves from "../../imgs/Vectors.png"

const FooterStyled= styled.footer`
    background-image: url(${Waves});
    display: flex;
    width: 100%;
    height: 190px;
    margin-bottom: 0;
    position: fixed;
    bottom: 0;
`


function Footer () {
    return(
         <FooterStyled/>
        
        )
}


export default Footer