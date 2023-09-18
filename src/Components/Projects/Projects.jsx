import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import glamour from "../assets/glamour.png"
import columbus from "../assets/columbus.png";

import healthcart from "../assets/healthcart.jpg";
import emart  from "../assets/E-mart.png";

export default function Projects() {
    const Project = [
        {
            id: 1,
            src: glamour,
            name: "Glamour Beauty",
            desc: "Glamour Beauty is a website which specialize in selling female beauty products. ",
            stack: "JavaScript | HTML | CSS | React.js | Chakra UI",
            github: "https://github.com/Omkanta/Glamour-Beauty",
            deploy: "https://glamour-pi.vercel.app/"
           
        },
        {
            id: 2,
            src: healthcart,
            name: "HealthCart",
            desc: "Healthcare is an online platform intended to provide authentic health and nutritional supplements.",
            stack: "React | Redux | Chakra UI | Nodejs | Express | Mongo DB",
            github: "https://github.com/bharat24862486/defeated-interest-8343",
            deploy: "https://defeated-interest-8343-9jv8.vercel.app/"
           
        },
        {
            id: 3,
            src: columbus,
            name: "Columbus Clothes",
            desc: "Columbus Clothes is E-commerce website which offers variety of clothes for three different categories i.e Men's, Women's, Kid's Section.",
            stack: "HTML | CSS | JavaScript | JSON server",
            github: "https://github.com/Omkanta/Columbus-Clothes",
            deploy: "https://columbus-kappa.vercel.app/"
        },
        {
            id: 4,
            src: emart,
            name: "E-Mart",
            desc: "The E-Mart E-commerce Website is designed to offer customers a seamless and enjoyable shopping experience for clothes and shoes.",
            stack: " ReactJs | Chakra-Ui | Nodejs | MongoDB | Express ",
            github: "https://github.com/aniketghormare/guiltless-turkey-1550",
            deploy: "https://comforting-chaja-8614b3.netlify.app/"
        }
    ]
   
    return (
        <div>
            <Box id="projects" w={{base: "95%", md: "80%"}} m="auto" mt="5%" p="30px">
            <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">PROJECTS</Heading>                
            {Project.map((e) => <ProjectCard key={e.id} data={e} />)}
            </Box>
        </div>
    )
}