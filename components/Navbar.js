import { Box, Text,Img,Button,ButtonGroup,Tooltip } from "@chakra-ui/react"
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
<Tooltip hasArrow label="Kembali ke halaman utama" bg="#1B7AD0">
  <Text cursor="pointer" onClick={() => router.push('/')}>Home</Text>
</Tooltip>

<Tooltip hasArrow label="Dapatkan kumpulan materi dari guru-guru lain" bg="#1B7AD0">
  <Text cursor="pointer" onClick={() => router.push('/comaterial')}>Bantuan Materi</Text>
</Tooltip>

<Tooltip hasArrow label="Buat soal secara otomatis" bg="#1B7AD0">
  <Text cursor="pointer" onClick={() => router.push('/buatsoal')}>Buat Soal</Text>
  </Tooltip>

<Tooltip hasArrow label="Cari asisten" bg="#1B7AD0">
<Text cursor="pointer" onClick={() => router.push('/cariasisten')}>Cari Asisten</Text>
</Tooltip>

</Box>

{!user && <Button mr="50px" colorScheme="blue" onClick={login} className="btn">Daftar/Masuk</Button>}
{user && <Text fontSize="18px">{user.email}</Text>}
{user && <Button mr="50px" colorScheme="blue" onClick={logout} className="btn">Keluar</Button>}
</Box>
  
    )
    
}