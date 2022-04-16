import {BrowserRouter,Routes, Route} from "react-router-dom";
import {ChakraProvider} from '@chakra-ui/react';
import theme from './theme';
import Layout from "./components/Layout";
import Home from "./pages/Home";
function App() {
  return (
    <ChakraProvider theme={theme} resetCSS={false}>  
    <Layout>    
      <BrowserRouter>
        <Routes>
          <Route path='/' title='hi' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Layout>      
    </ChakraProvider>
  );
}

export default App;
