import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { AuthContextProvider } from '../stores/authContext';
import Navabar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ChakraProvider>
        <Navabar/>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthContextProvider>
  );
}

export default MyApp