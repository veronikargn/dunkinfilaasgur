import { Box, Text,Img,Button,ButtonGroup } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useContext } from 'react'
import AuthContext from "../stores/authContext"


export default function Navbar(){
  const {user, login, logout, authReady} = useContext(AuthContext)
  console.log(user)
  const router = useRouter()
    
    return (
      
    <Box
        w="full"
        h="76px"
        bg="white"
        boxShadow="xl"
        fontSize="1.5rem"
        fontWeight="700"
        d="flex"
        flexDir="row"
        alignItems="center"
        justifyContent="space-between"
      >
        
        <Img src="/LOGO.png" ml ="76px" mr="20px" h = "65px"/>
        
        <Box mr="40px" d="flex" flexDir="row" w="500px" justifyContent="space-between" fontSize="18px">
          <Text cursor="pointer" onClick={() => router.push('/')}>Home</Text>
          <Text cursor="pointer" onClick={() => router.push('/comaterial')}>Bantuan Materi</Text>
          <Text cursor="pointer" onClick={() => router.push('/buatsoal')}>Buat Soal</Text>
          <Text cursor="pointer" onClick={() => router.push('/FormTest')}>Cari Asisten</Text>
        </Box>
        {!user && <Button mr="50px" colorScheme="blue" onClick={login} className="btn">Daftar/Masuk</Button>}
        {user && <Text fontSize="18px">{user.email}</Text>}
        {user && <Button mr="50px" colorScheme="blue" onClick={logout} className="btn">Keluar</Button>}
    </Box>
  
    )
    
}

