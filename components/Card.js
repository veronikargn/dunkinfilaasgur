import { Box, Text } from "@chakra-ui/react"
import { useState, useEffect } from "react"


const Card = ({ name, image }) => {
    const [bgColor, setBgColor] = useState("")
    
    return (
        <Box bg={bgColor} color="white" borderRadius="md" w="250px" h="150px" ml="20px" mt="20px">
            <Text>name: {name}</Text>
            <Text>username: {username}</Text>
        </Box>
    )
}

export default Card;