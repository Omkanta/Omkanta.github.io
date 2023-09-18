import {
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Image,
    Link,
    Stack,
  } from "@chakra-ui/react";
  import { BsGithub, BsLinkedin } from "react-icons/bs";
  import { GoMail } from "react-icons/go";
  import Profile from "../assets/Resume_photo.png";
  import resume from "../assets/Om_kanta_Prasad_Yadav_Resume.pdf";
  
  export default function Home() {
    return (
      <div>
        <Box id="home" w="80%" m="auto" mt="5%" p="30px">
          <Flex
            direction={{ base: "column", sm: "column", lg: "row" }}
            gap="30px"
          >
            <Box
              w={{ base: "100%", sm: "100%", lg: "50%" }}
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb='20px'
            >
              <Stack direction="column">
                <Box textAlign="left">
                  <Heading fontSize={{ base: "2em", md: "3em", lg: "4rem" }}>
                    Hello!
                  </Heading>
                  <Heading fontSize={{ base: "2em", md: "3em", lg: "4rem" }}>
                    I'm <span style={{color:"rgb(66,153,225)"}}>Om kanta,</span>
                  </Heading>
                  <Heading fontSize={{ base: "2em", md: "3em", lg: "4rem" }}>
                    Full Stack Web Developer
                  </Heading>
                </Box>
                <Link href={resume} download  id="resume-link-2" textAlign="left">
                  <Button
                 id="resume-button-2"
                    m={"10px"}
                    p="15px"
                    w="60%"
                    bgColor="rgb(71, 105, 133)"
                    color="#e9c6c6"
                    fontSize="1.5em"
                    _hover={{ 
                      bgColor:"rgb(33, 105, 163)",
                      color:"#ebc9c9",
                      fontSize:"1.5em",
                     }}
                    onClick={() =>
                      window.open(
                        "https://drive.google.com/file/d/14CLHdvT2dJQNH2dMDItfn_Ih8uvYn2SG/view?usp=drive_link"
                      )
                    }
                  >
                    Resume
                  </Button>
                </Link>
                <HStack alignItems="center" gap="20px">
                <Link href="mailto:1omkant1998@gmail.com" isExternal>
                    <GoMail size="3em" />
                  </Link>
                  <Link href="https://github.com/Omkanta" isExternal>
                    <BsGithub size="2em" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/om-kanta-prasad-yadav-049811218/"
                    isExternal
                  >
                    <BsLinkedin size="2em" />
                  </Link>
                </HStack>
              </Stack>
            </Box>
            <Box
              class="home-img"
              w={{ base: "100%", sm: "100%", lg: "50%" }}
              // w="70%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Image
                class="home-img"
                src={Profile}
                alt="Aniket Profile Picture"
                w="75%"
                border="1px solid black"
                borderRadius="50%"
                marginTop="-30px"
                borderColor="#f7d9d8"
             
  
              />
            </Box>
          </Flex>
        </Box>
      </div>
    );
  }