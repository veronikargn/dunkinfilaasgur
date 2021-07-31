import { Box,Img ,Text,SimpleGrid,Button,Tooltip} from "@chakra-ui/react"
import { useRouter } from "next/router"

const Buatsoal = () => {
  const router = useRouter()
  return (
    <>
      <Box bgImage="backgroundsoal.png" bgSize="cover" w="full" h="800px" >
   
            <Box textAlign="center" ml="25%" pt ="180px" w="700px" classname="header">
              <Text color="white" fontSize="36" fontWeight="Bold">Coming Soon : Buat Soal</Text>
            </Box>
      </Box>
    </>
  )
}

export default Buatsoal;