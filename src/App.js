
import './App.css';
import Header from './componentes/Header';
import styled from 'styled-components';
import Login from './componentes/Login/index.js';
import Footer from './componentes/Footer/index.js';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:#1C1F1C;
  display: flex;
  flex-direction: column;
`
const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    

`

function App() {
  return (
    <AppContainer>
          <Header/> 
          <Section>
            <Login/>
          </Section>
          <Footer/> 
    </AppContainer>
    
  );
}

export default App;
