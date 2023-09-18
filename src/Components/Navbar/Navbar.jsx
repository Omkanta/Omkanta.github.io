import style from "./Navbar.module.css";
import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import resume from "../assets/Om_kanta_Prasad_Yadav_Resume.pdf";

const Navbar = () => {
  return (
      <Box id="nav-menu" className={style.navbar}>
        <Flex justifyContent="space-between" alignContent="center">
          <Box ml="20px">
            <Heading>Om kanta</Heading>
          </Box>
          <Box id={style.normal}>
            <HStack gap="30px" fontSize="20px">
              <Box>
                <Link className="nav-link home" href="#home">
                  HOME
                </Link>
              </Box>
              <Box>
                <Link className="nav-link about" href="#about">
                  ABOUT 
                </Link>
              </Box>
              <Box>
                <Link className="nav-link skills"  href="#skills">
                  SKILLS
                </Link>
              </Box>
              <Box>
                <Link className="nav-link projects" href="#projects">
                  PROJECTS
                </Link>
              </Box>
              <Box>
                <Link className="nav-link contact" href="#contact">
                  CONTACT
                </Link>
              </Box>
              <Box>
                <Link className="nav-link resume" href={resume} download>
                  <Button
                    id="resume-button-1"
                    bgColor="rgb(71, 105, 133)"
                    color="#e9c6c6"
                    p="5px 25px"
                    fontSize="1em"
                    _hover={{ 
                      bgColor:"rgb(33, 105, 163)",
                     color:"#ebc9c9",
                     fontSize:"1em",
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
              </Box>
            </HStack>
          </Box>
          <Box id={style.hamburger}>
            <Menu bgColor="rgb(2, 28, 85)">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon color="#05386B" />}
              />
              <MenuList gap='5px' textAlign="center" closeOnSelect>
                <MenuItem
                  bgColor="rgb(13, 25, 51)"
                  color="#e2dede"
                  fontWeight="bold"
                  mt="-10px"
                  // className="nav-link home" 
                >
                  <Link href="#home">HOME</Link>
                </MenuItem>
                <MenuItem
                  bgColor="rgb(13, 25, 51)"
                  color="#e2dede"
                  fontWeight="bold"
                  // className="nav-link about"
                >
                  <Link  href="#about">ABOUT</Link>
                </MenuItem>
                <MenuItem
                  bgColor="rgb(13, 25, 51)"
                  fontWeight="bold"
                  color="#e2dede"
                  // className="nav-link skills"
                >
                  <Link  href="#skills">SKILLS</Link>
                </MenuItem>
                <MenuItem
                  bgColor="rgb(13, 25, 51)"
                  color="#e2dede"
                  fontWeight="bold"
                  // className="nav-link projects"
                >
                  <Link   href="#projects">PROJECTS</Link>
                </MenuItem>
                <MenuItem
                  bgColor="rgb(13, 25, 51)"
                  fontWeight="bold"
                  color="#e2dede"
                  // className="nav-link contact" 
                >
                  <Link href="#contact">CONTACT</Link>
                </MenuItem>
                <MenuItem 
                mb="-8px"
                bgColor="rgb(13, 25, 51)"
                fontWeight="bold"
                >
                  <Link href={resume} download>
                    <Button
                      id="resume-button-1"
                      bgColor="rgb(71, 105, 133)"
                      color="#e9c6c6"
                      p="5px 25px"
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
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
  );
};

export default Navbar;