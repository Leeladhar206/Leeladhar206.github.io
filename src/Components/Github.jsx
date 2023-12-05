import React from 'react';
import { Box, Flex, Text, Image } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';


export const Github = () => {
  const selectLastHalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 7;

    return contributions.filter((activity) => {
      const date = new Date(activity.date);
      const monthOfDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };

  const calendarStyle = {
    border: '1px solid white',
    borderRadius: '5px',
    padding: '8px',
    color: 'green',
    fontWeight: 'bolder',
    display: 'block',
    margin: 'auto',
    marginBottom: '1em',
  };

  return (
    <Box width="80%" display="flex" flexDirection="column" margin="auto">
      <Text marginBottom="1.2em">Github Stats</Text>

      <GitHubCalendar
        style={calendarStyle}
        username="Leeladhar206"
        blockSize={25}
        blockRadius={8}
        fontSize={14}
        transformData={selectLastHalfYear}
        hideColorLegend
        labels={{
          totalCount: '{{count}} contributions in the last half year',
        }}
        className="react-activity-calendar"
      />

      <Flex justifyContent="center" flexDirection="column" alignItems="center" margin="auto" gap="1em">
        <Image
          id="github-stats-card"
          src="https://github-readme-stats.vercel.app/api?username=Leeladhar206&theme=transparent&hide_border=false&include_all_commits=false&count_private=false"
          width="90%"
        />

        <Image
          id="github-streak-stats"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Leeladhar206&theme=transparent&hide_border=false"
          width="90%"
          border="2px solid black"
        />

        <Image
          id="github-top-langs"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Leeladhar206&theme=transparent&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          width="90%"
        />
      </Flex>
    </Box>
  );
};
