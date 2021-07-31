/**import {upload} from "../lib/s3Client"**/

import {
  Box,
  Img,
  Text,
  SimpleGrid,
  Button,
  Input,
  Select,load,setLoad
} from "@chakra-ui/react";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react"

import Navbar from "../components/Navbar";

import axios from "axios";
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
  return <div>you&apos;re free</div>;
};

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
  const [kelas, setKelas] = useState(1)
  const [pelajaran, setPelajaran] = useState(1)
  const [jenis, setJenis] = useState(1)
  const [load,setLoad] = useState(1)
  const [firstName, setFirstName,setMatpel] = useState("");

  const uploadData = () => {
    let formData = new FormData();
    formData.append("file", file);
    axios
      .post("http://103.31.39.236:5000", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data); // url untuk access filenya di s3
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <>
      <Box>
        <Box d="flex" flexDir="row">
          <Box bgImage="bg2.png" bgSize="cover" w="400px" minH="1200">
            <Box ml="76px">
              <Text pt="100px" color="white" fontSize="36" fontWeight="Bold">
                Bantuan Materi
              </Text>

              <Box
                mt="50px"
                d="flex"
                flexDir="column"
                w="300px"
                h="300px"
                justifyContent="space-between"
                fontSize="18px"
              >
                <Text cursor="pointer" onClick={() => setLoad(1)}>
                  Semua Materi
                </Text>
                <Accordion allowToggle mt>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Pilih Kelas
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(1)}>
                        Kelas 1
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(2)}>
                        Kelas 2
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(3)}>
                        Kelas 3
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(4)}>
                        Kelas 4
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(5)}>
                        Kelas 5
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(6)}>
                        Kelas 6
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(7)}>
                        Kelas 7
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(8)}>
                        Kelas 8
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(9)}>
                        Kelas 9
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(10)}>
                        Kelas 10
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(11)}>
                        Kelas 11
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(12)}>
                        Kelas 12
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setKelas(13)}>
                        Lainnya
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Pilih Mata Pelajaran
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(1)}>
                        Bahasa Indonesia
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(2)}>
                        Bahasa Inggris
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(3)}>
                        Matematika
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(4)}>
                        Biologi
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(5)}>
                        Ekonomi
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(6)}>
                        Fisika
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(7)}>
                        Kimia
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(8)}>
                        Geografi
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(9)}>
                        Sosiologi
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(10)}>
                        PPKn
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(11)}>
                        Saintek
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(12)}>
                        Sejarah
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(13)}>
                        Soshum
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setPelajaran(14)}>
                        Lainnya
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>

                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          Pilih Jenis materi
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setJenis(1)}>
                        Slide
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setJenis(2)}>
                        Rangkuman
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setJenis(3)}>
                        Latihan Soal
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setJenis(4)}>
                        Video
                      </Text>
                    </AccordionPanel>
                    <AccordionPanel pb={4}>
                      <Text cursor="pointer" onClick={() => setJenis(5)}>
                        Lainnya
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Text cursor="pointer" onClick={() => setLoad(0)}>
                  Upload Materi
                </Text>
                {/* 0 */}
              </Box>
            </Box>
          </Box>
          
          { load === 0 && (
             <Box ml="20%" mt="50px" boxShadow="xl" p="6" rounded="md" bg="white" height="700px">
              <FormControl
                name="upload"
                method="POST"
                data-netlify="true"
                isRequired
              >
                <FormLabel id="Judul materi">Judul Materi</FormLabel>
                <Input placeholder="Judul Materi" />

                <Text>Unggah File</Text>
                <Input
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                />
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
                <Button onClick={() => uploadData()}>Upload File</Button>
              </FormControl>
              </Box>
            )}
      
        </Box>
      </Box>
    </>
  );
};

export default Comaterial;
