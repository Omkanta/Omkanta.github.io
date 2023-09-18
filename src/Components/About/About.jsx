import {
  Box,
  Button,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import resume from "../assets/Om_kanta_Prasad_Yadav_Resume.pdf";
export default function About() {
  return (
    <div className="about section" id="about">
      <Box w="80%" m="auto" mt="5%" p="30px">
        <VStack>
          <Heading _hover={{ textDecoration: "underline" }} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">
            About Me
          </Heading>
          <Text
            id="user-detail-name"
            fontWeight="bold"
            fontSize={{ base: "xl", md: "3xl" }}
          >
            Hello! I'm <span style={{ color: "rgb(30, 150, 248)" }}>Om kanta Prasad Yadav</span>
          </Text>
          <Text
            id="user-detail-intro"
            fontSize={{ base: "md", md: "2xl" }}
            w="80%"
          >
            An analytic and goal-oriented Full Stack Web Developer,with 1200+
            hours of coding practice, 300+ hours of Data structure and algorithms.
            Skilled with robust knowledge of React.js, Chakra UI, Node.js,
            Express.js, MongoDB, with a problem-solving mindset and high
            daptability. Aims to leverage knowledge and build world-class projects to
            contribute to the growth of both own and organization.{" "}
          </Text>
          <Box pt="20px">
            <Button
              id="resume-button-2"
              bgColor="rgb(71, 105, 133)"
              color="#e9c6c6"
              p="5px 25px"
              fontSize="1.5em"
              _hover={{
                bgColor: "rgb(33, 105, 163)",
                color: "#ebc9c9",
                fontSize: "1.5em",
              }}
            >
              <a
                id="resume-link-2"
                href={resume}
                download
                textAlign="left"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/14CLHdvT2dJQNH2dMDItfn_Ih8uvYn2SG/view?usp=drive_link"
                  )
                }
              >
                Resume
              </a>


            </Button>
            <HStack gap="20px" mt="10px">
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
          </Box>
        </VStack>
      </Box>
    </div>
  );
}