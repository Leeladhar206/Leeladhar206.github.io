import React from "react";
import { Box, Flex, Text, Image } from "@chakra-ui/react";
import GitHubCalendar from "react-github-calendar";

export const Github = () => {
  const selectLastHalfYear = (contributions) => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const monthsToShow = 6;

    let startMonth = currentMonth - monthsToShow + 1;
    let startYear = currentYear;

    if (startMonth < 0) {
      startMonth += 12;
      startYear -= 1;
    }

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const activityYear = date.getFullYear();
      const activityMonth = date.getMonth();
      if (
        (activityYear === startYear && activityMonth >= startMonth) ||
        (activityYear === currentYear && activityMonth <= currentMonth)
      ) {
        return true;
      } else {
        return false;
      }
    });
  };

  const calendarStyle = {
    display: "flex",
    justifyContent: "center",
    borderRadius: "lg",
    margin: "auto",
    padding: "10px",
  };

  return (
    <Box width="80%" display="flex" flexDirection="column" margin="auto">
      <Text
        fontSize={"3xl"}
        fontWeight={500}
        textAlign={"center"}
        mb={10}
        mt={10}
      >
        GitHub Stats
      </Text>

      <Flex
        justifyContent="center"
        alignItems="center"
        margin="auto"
        gap={10}
        direction={{ base: "column", lg: "row" }}
      >
        <Box
          w={{ base: "300px", md: "380px" }}
          border="1px solid #06113C"
          borderRadius="lg"
          h="200px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
            transform: "scale(1.01)",
          }}
          transition="transform 0.3s ease"
        >
          <GitHubCalendar
            style={calendarStyle}
            username="Leeladhar206"
            blockSize={9}
            hideColorLegend
            transformData={selectLastHalfYear}
            labels={{
              totalCount: "{{count}} contributions in the last 6 months",
            }}
            className="react-activity-calendar"
          />
        </Box>
        <Box
          w={{ base: "300px", md: "380px" }}
          border="1px solid #06113C"
          borderRadius="lg"
          h="200px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
            transform: "scale(1.01)",
          }}
          transition="transform 0.3s ease"
        >
          <Image
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=Leeladhar206&theme=transparent&hide_border=true&include_all_commits=false&count_private=false"
            width="90%"
          />
        </Box>
      </Flex>

      <Flex
        justifyContent="center"
        alignItems="center"
        margin="auto"
        gap={10}
        direction={{ base: "column", lg: "row" }}
        mt={10}
      >
        <Box
          w={{ base: "300px", md: "380px" }}
          border="1px solid #06113C"
          borderRadius="lg"
          h="200px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
            transform: "scale(1.01)",
          }}
          transition="transform 0.3s ease"
        >
          <Image
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com/?user=Leeladhar206&theme=transparent&hide_border=true"
            width="90%"
          />
        </Box>

        <Box
          w={{ base: "300px", md: "380px" }}
          border="1px solid #06113C"
          borderRadius="lg"
          h="200px"
          display="flex"
          alignItems={"center"}
          justifyContent={"center"}
          _hover={{
            bg: "#06113C",
            color: "#E6E7EB",
            transform: "scale(1.01)",
          }}
          transition="transform 0.3s ease"
        >
          <Image
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Leeladhar206&theme=transparent&hide_border=true&include_all_commits=false&count_private=false&layout=compact"
          />
        </Box>
      </Flex>
    </Box>
  );
};
