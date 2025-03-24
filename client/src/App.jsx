import {ThemeProvider, styled} from "styled-component";
import {lightTheme} from "./utils/Themes";
import {BrowserRouter} from "react-router-dom"
import { styled } from 'styled-components';


const Container= styled.dev`
width:100%;
height:100vh;
display:flex;
flex-direction:column;
background: ${({theme})=>theme.bg};
color:${({theme})=>theme.text_primary};
overflow-x:hidden;
overflow-y:hidden;
transition:all 0.2s ease;
`;


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <ThemeProvider theme={lightTheme}>
         <BrowserRouter>
         <Container>

         </Container>
         </BrowserRouter>
      </ThemeProvider>
      
    </>
  )
}

export default App
