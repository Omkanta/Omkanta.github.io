import { Box, Center, Flex, Heading, Image } from "@chakra-ui/react";

export default function GitHub() {
  return (
    <div>
      <Box w="70%" m="auto" mt="5%" p="30px">
        <Box>
          <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%">
            GITHUB STATISTICS
          </Heading>
          <Center>
          <Flex
            justifyContent="space-around"
            direction={{ base: "column", sm: "column", lg: "row", xl: "row" }}
            gap="10px"
          >
            <Box>
              <Image
                id="github-stats-card"
                src="https://github-readme-stats.vercel.app/api?username=Omkanta"
                alt="Stats"
              />
            </Box>
            <Box>
              <Image
                id="github-streak-stats"
                src="https://github-readme-streak-stats.herokuapp.com?user=Omkanta"
                alt="Strek"
              />
            </Box>
            <Box>
              <Image
                id="github-top-langs"
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Omkanta"
                alt="Language"
              />
            </Box>
          </Flex>
          </Center>
        </Box>
        <Box>
          <Heading _hover={{textDecoration:"underline"}} textDecoration="none" color="rgb(210, 226, 167)" mb="5%" mt="5%">
            GITHUB CALENDER
          </Heading>
          <Box className="react-activity-calendar">
            <Image
              width={{ base: "100%", sm: "100%" }}
              m="auto"
              bgColor="#e0e0e0"
              borderRadius="5px"
              src="https://ghchart.rshah.org/Omkanta"
              alt="Git Calender"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}