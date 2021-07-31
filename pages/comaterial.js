/**import {upload} from "../lib/s3Client"**/

import {
  Box,
  Img,
  Text,
  SimpleGrid,
  Button,
  Input,
  Select,
} from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { useState } from "react";

const func = () => {
  return (
    <div >
       you&apos;re free
      </div>
  )}

const getColor = (props) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

function StyledDropzone(props) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*" });

  return (
    <div className="container">
      
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} onChange={(e) => console.log(e)} />
        <p>Drag dan drop file atau klik untuk mengunggah</p>
     
      </Container>
    </div>
  );
}

const Comaterial = () => {
  const [firstName, setFirstName,setMatpel] = useState("");
  return (
    <>
      <Box>

        <Box d="flex" flexDir="row">
          <Box bgImage="bg2.png" bgSize="cover" w="400px" h="698px">
            <Box ml="76px">
              <Text pt="100px" color="white" fontSize="36" fontWeight="Bold">
                Bantuan Materi
              </Text>
              <Text mt="60px" fontSize="20" color="white">
                Semua Materi
              </Text>
              <Text mt="40px" fontSize="20" color="white">
                Kelas
              </Text>
              <Text mt="40px" fontSize="20" color="white">
                Mata Pelajaran
              </Text>
              <Text mt="40px" fontSize="20" color="white">
                Upload Materi
              </Text>
            </Box>
          </Box>
          <Box ml="20%" mt="50px" boxShadow="xl" p="6" rounded="md" bg="white">


            <FormControl name="upload" method="POST" data-netlify="true" isRequired>
              <FormLabel id="Judul materi">Judul Materi</FormLabel>
              <Input
                placeholder="Judul Materi"
                onChange={(e) => setFirstName(e.target.value)}
              />
         
        
            <Text>Unggah File</Text>
            <StyledDropzone />
            <FormLabel id="Kelas">Kelas</FormLabel>
                <Select placeholder="Select Kelas">
                  <option>Kelas 1</option>
                  <option>Kelas 2</option>
                  <option>Kelas 3</option>
                  <option>Kelas 4</option>
                  <option>Kelas 5</option>
                  <option>Kelas 6</option>
                  <option>Kelas 7</option>
                  <option>Kelas 8</option>
                  <option>Kelas 9</option>
                  <option>Kelas 10</option>
                  <option>Kelas 11</option>
                  <option>Kelas 12</option>
                </Select>

                <FormLabel id="Matpel">Matpel</FormLabel>
                <Select placeholder="Mata Pelajaran">
                  <option>Bahasa Indonesia</option>
                  <option>Bahasa Inggris</option>
                  <option>Matematika</option>
                  <option>Biologi</option>
                  <option>Ekonomi</option>
                  <option>Fisika</option>
                  <option>Kimia</option>
                  <option>Geografi</option>
                  <option>Sosiologi</option>
                  <option>PPKn</option>
                  <option>Saintek</option>
                  <option>Sejarah</option>
                  <option>Soshum</option>
                  <option>Lainnya</option>
                </Select>

                <FormLabel id="jenismateri">Jenis Materi</FormLabel>
                <Select placeholder="Jenis Materi">
                  <option>Slide</option>
                  <option>Rangkuman</option>
                  <option>Latihan Soal</option>
                  <option>Video</option>
                </Select>
                <Button type="submit">Submit</Button>
              </FormControl>  
              <Button onClick={()=>upload()}>Coba aja</Button>
        
          </Box>
        </Box>
    

      </Box>
    </>
  );
};

export default Comaterial;
