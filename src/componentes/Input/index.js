import styled from "styled-components"
import "@fontsource/lexend-deca";


const InputStyled = styled.input`
    all:unset;
    width: calc(65% - 10px);
    background-color: #216869;
    border-style: none;
    border-radius: 2px;
    height: 50px;
    margin-bottom: 10px;
    font-family: "Lexend Deca";
    color: #FFFFFF;
    padding-left: 10px;
    
    &::placeholder {
        color: #FFFFFF;
        margin-left: 0px;
    }
`

function Input ({placeholder}){
    return (
        <InputStyled placeholder={placeholder}/>
    )

}

export default Input