import { Text } from "@chakra-ui/react";

const Streaks = ({ streakCount, longestStreak }) => {
  return (
    <>
      <Text>
        Current Streak: {streakCount}, Longest Streak: {longestStreak}
      </Text>
    </>
  );
};

export default Streaks;
