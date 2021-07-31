import { Box,Img ,Text,SimpleGrid,Button,Tooltip} from "@chakra-ui/react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

const Home = () => {
  const router = useRouter()
  return (
    <>
      <Box bgImage="background.png" bgSize="cover" w="full" h="2300px" >
        <Box classname="gambardantulisan" d="flex" flexDir="row">
        
          <Box classname="Tulisan">
            <Box ml="100px" pt ="180px" w="500px" classname="header">
              
               <Text color="white" fontSize="64" fontWeight="Bold">Asisten Guru,</Text>
                <Text color = "white" fontSize="48" fontWeight="Bold">Teman Terbaik Guru</Text>
              
            </Box>

            <Box w="500px" mt="20px" ml="100px">
              <Text color = "white" fontSize="18">Asgur.id membantu guru-guru di Indonesia untuk meningkatkan kualitas bahan ajar mengajar</Text>
            </Box>
          </Box>
          <motion.div initial="hidden" animate="visible" variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible:{
              scale: 1,
              opacity: 1,
              transition:{
                delay:.4
              }
              },
            }}>
          <Img src="/illustration.png" pt="180px" ml="120px"/>
          </motion.div>
        </Box>

        <Box classname="fitur" d="flex" flexDir="row" >
        <Box classname="jelajahiFitur" w="700px" ml="100px" mt="100px">
          <Text color="white" fontSize="36" fontWeight="Bold">Jelajahi fitur-fitur kami</Text>
          <SimpleGrid
            mt="20px"
            columns={{ sm: 2, md: 2 }}
            spacing="5"
            textAlign="center"
            rounded="lg"
            color="gray.400"
          >
            <Tooltip hasArrow label="Cari asisten" bg="#1B7AD0">
            <Box cursor="pointer" boxShadow="xl" p="6" rounded="md" bg="white" onClick={() => router.push('/cariasisten')}>
             Cari Asisten
            </Box>
            </Tooltip>
            <Tooltip hasArrow label="Buat soal secara otomatis" bg="#1B7AD0">
            <Box cursor="pointer" boxShadow="xl" p="6" rounded="md" bg="white" onClick={() => router.push('/buatsoal')}>
              Pembuat Soal
            </Box>
            </Tooltip>
            <Tooltip hasArrow label="Dapatkan kumpulan materi dari guru-guru lain" bg="#1B7AD0">
            <Box cursor="pointer" boxShadow="xl" p="6" rounded="md" bg="white" onClick={() => router.push('/comaterial')}>
              Bantuan Materi
            </Box>
            </Tooltip>
            <Box cursor="pointer" boxShadow="xl" p="6" rounded="md" bg="white">
              COVID-19 Updates
            </Box>
 
          </SimpleGrid>
        </Box>

        <Box
          textAlign="center"
          width ="300px"
          bg="#1B7AD0" p="20px"
          rounded="lg"
          ml="150px"
          mt="100px">
            <Text color="white" fontSize="16" fontWeight="Semibold">Ingin mengakses dan unduh semua materi tanpa batas ?</Text>
            <Text mt="20px" color="white" fontSize="24" fontWeight="Bold">Gabung Sebagai</Text>
            <Text fontSize="24" fontWeight="Bold" >Member Premium</Text>
            <Text mt="20px">Hanya Rp 10.000 / bulan atau Rp 180.000 / tahun</Text>
            <Tooltip hasArrow label="Klik tombol untuk mendaftar" bg="#1B7AD0">
            <Button mt="20px">Daftar Sekarang</Button>
            </Tooltip>
        </Box>

      </Box>
      
      <Text color="#1396E6" fontSize="36" fontWeight="Bold" ml="100px" mt="150px"> Kesan Pesan Guru</Text>
      <Box classname="KesanPesan"
        padding="30px"
        ml="120px"
        mr="120px">
          <SimpleGrid columns={3} spacing={20}>
          <Box bg="white" 
            height="300px" 
            rounded="lg" 
            boxShadow="md"
            textAlign="center"
          >
            <Img src="bu sumiyem.png"  pt="20px" ml="30%"></Img>
            <Text fontSize ="16" fontWeight="bold" mt="10px">Ningsih </Text>
            <Text >Guru SMAN 14 Jakarta</Text>
            <Text fontStyle="italic" pb="20px">Fitur ‘buat soal’ bagus sekali, saved me so much time.</Text>
          </Box>
        
          <Box bg="#white" rounded="lg" boxShadow="md" textAlign="center" height="300px" >
            <Img src="bu ningsih.png"  pt="20px" ml="30%"></Img>
            <Text fontSize ="16" fontWeight="bold" mt="10px">Melati Putri </Text>
            <Text >Guru SMA Tiara Bangsa</Text>
            <Text fontStyle="italic" pb="20px">Asgur.id membantu saya menghemat waktu :D Saya puas sekali</Text>
          </Box>

          <Box bg="#white" rounded="lg" boxShadow="md" textAlign="center" height="300px" >
            <Img src="bu wawa.png"  pt="20px" ml="30%"></Img>
            <Text fontSize ="16" fontWeight="bold" mt="10px">Windah K. </Text>
            <Text >Guru SD Citra Kasih</Text>
            <Text fontStyle="italic" pb="20px">Murid saya senang sekali dengan hasil video animasi. Thanks to Asgur !</Text>
          </Box>
          </SimpleGrid>
          <Box 
            textAlign="center"
          >
            <Text fontSize="48px" fontWeight="bold" pt="50px">FAQ</Text>
            <Text fontWeight="Bold" color="#0E7ADD">Bagaimana cara untuk login ?</Text>
            <Text  pb="20px">Registrasi nama dan email dulu pada halaman registrasi</Text>

            <Text fontWeight="Bold" color="#0E7ADD" >Mengapa saya tidak bisa download lebih dari 3 file ?</Text>
            <Text  pb="20px">Anda harus bergabung dulu sebagai member Premium</Text>

            <Text fontWeight="Bold" color="#0E7ADD" >Bagaimana mencari materi sesuai kelas atau pelajaran ? </Text>
            <Text  pb="40px">Bisa menggunakan filter yang disediakan pada sidebar di halaman Bantuan Materi</Text>

            <Text fontStyle="bold" fontSize="14px" pb="20px">Untuk kontak lebih lanjut, silahkan hubungi kami melalui E-mail kami : asgur@gmail.com </Text>
          </Box>
      </Box>
      </Box>
      
    </>
  )
}

export default Home;