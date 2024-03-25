import styled from "styled-components"

const ButtonStyled = styled.button`
    all:unset;
    width: 65%;
    background-color: #49A078;
    border-style: none;
    border-radius: 2px;
    height: 50px;
    margin-bottom: 10px;
    font-family: "Lexend Deca";
    color: #FFFFFF;
    text-align: center;
`

function Button (){
    return (
        <ButtonStyled>Login</ButtonStyled>
    )
}

export default Button