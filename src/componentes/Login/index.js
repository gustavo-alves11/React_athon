import styled from "styled-components";
// import Button from '@mui/material/Button';
import Button from "../Button";
import TextField from '@mui/material/TextField';
import Input from '../Input/index'
import {createTheme, ThemeProvider} from "@mui/material";
import "@fontsource/lexend-deca";

const LoginContainer = styled.div`
    
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Titulo = styled.h1`
    color: #FFFF;
    font-family: "Lexend Deca";
    font-size: 62px;
    text-align: center;
    margin-bottom: 10px;
`
const Textos = styled.p`
    color: ${props => props.color || '#FFFF'};
    font-family: "Lexend Deca";
    font-size: ${props => props.size || '16px'};
    text-align: ${props => props.align || 'right'};
    margin-top: 0;
    margin-left: ${props => props.marginL || '0px'};
    margin-bottom: 20px;
`
const ContainerEsqueceuSenha = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: end;
    margin-bottom: 5px;

`

const Container = styled.div`
    display: flex;
    width: 65%;
    flex-direction: row;
    justify-content: center;
    margin-bottom: -5px;

`
const Container2 = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: center;
`

function Login (){
    return(
         <LoginContainer>
            <Titulo>Faça networking através do esporte</Titulo>
            <Textos size='24px'>expanda seus horizontes </Textos>
                <Input placeholder='Email ou Phone'/>
                <Input placeholder='Senha' type="password"/>
                <ContainerEsqueceuSenha>
                    <Textos color='#9CC5A1'>Esqueceu a senha?</Textos>
                </ContainerEsqueceuSenha>
                 
                <Button>Login</Button>
                
                <Container>
                <Textos size='12px'>Ainda não tem cadastro? </Textos>
                <Textos size='12px' color="#9CC5A1" marginL='10px'> Criar nova conta</Textos>
                
                </Container> 
                <Container2>
                <Textos size='12px' align="center">Criar uma página para um clube, uma comunidade, uma marca ou uma empresa.</Textos>
                
                </Container2>
        </LoginContainer> 


    )

}


export default Login


{/* <Button 
                variant="contained" 
                sx={{
                    width: {width: '65%'},
                    height: 50

                }}
                color="primary">
                    Login
            </Button> */}


/* <TextField 
                id="outlined-basic" 
                label="Email ou Phone" 
                variant="outlined" 
                margin="dense"
                color='secundary'
                focused
                sx={{
                    width: {width: '65%'},
                    height: 50,
                    marginBottom: 2 
                }}
                />
            <TextField 
                id="outlined-basic" 
                label="Email ou Phone" 
                variant="outlined" 
                margin="dense"
                color='secundary'
                focused
                sx={{
                    width: {width: '65%'},
                    height: 50,
                    fontFamily: {fontFamily: "Lexend Deca"},

                    marginBottom: 2 
                    
                }}
                /> */