import {
  ChakraProvider,
  Flex,
  Heading,
  HStack,
  Button,
  Text,
  keyframes,
} from "@chakra-ui/react";
import FrontCard from "../components/FrontCard";
import { useState } from "react";
import BackCard from "../components/BackCard";
import data from "../Quiz/data";
import "./App.css";
import FormCard from "../components/FormCard";
import Streaks from "../components/Streaks";

const App = () => {
  const [count, setCount] = useState(0);
  const [quiz, setQuiz] = useState("start");
  const [ans, setAnswer] = useState("Click next button to start");
  const [toggle, setToggle] = useState(true);
  const [img, setImg] = useState("No Image");
  const [streakCount, setStreakCount] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [val, setVal] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const [isRotated, setIsRotated] = useState(false);

  const handleComponentClick = () => {
    setIsRotated(!isRotated);
  };

  const increment = (count) => {
    setCount((count + 1) % data.length);
    setQuiz(data[count].quiz);
    setAnswer(data[count].answer);
    setImg(data[count].img);
    setToggle(true);
    setVal("");
  };
  const decrement = (count) => {
    if (count > 0) {
      setCount(count - 1);
    }
    setQuiz(data[count].quiz);
    setAnswer(data[count].answer);
    setImg(data[count].img);
    setToggle(true);
    setVal("");
  };
  const getToggle = () => {
    setToggle(!toggle);
  };
  const handleStreak = (val) => {
    if (val === "") {
      alert("Guess input is empty!");
    }
    if (
      val.length > 0 &&
      ans.toLocaleLowerCase().includes(val.toLocaleLowerCase())
    ) {
      setStreakCount(streakCount + 1);
      setIsCorrect(true);
    } else {
      if (streakCount > longestStreak) {
        setLongestStreak(streakCount);
        setStreakCount(0);
        setIsCorrect(false);
      } else {
        setStreakCount(0);
        setIsCorrect(false);
      }
    }
  };
  return (
    <ChakraProvider>
      <Flex
        width='100vw'
        h='100vh'
        direction='column'
        alignItems='center'
        justifyContent='center'
        gap='2'
      >
        <Heading>The Ultimate Parents!</Heading>
        <Text>
          How good of a plant parent are you? Test all of your planty knowledge
          here!
        </Text>
        <Text>Number of cards: {data.length}</Text>
        <Streaks streakCount={streakCount} longestStreak={longestStreak} />
        <div>
          <div onClick={getToggle}>
            {toggle ? (
              <FrontCard
                data={quiz}
                image={img}
                handleComponentClick={handleComponentClick}
              />
            ) : (
              <BackCard
                data={ans}
                handleComponentClick={handleComponentClick}
              />
            )}
          </div>
        </div>
        <FormCard
          isCorrect={isCorrect}
          setVal={setVal}
          val={val}
          handleStreak={handleStreak}
          setStreakCount={setStreakCount}
          streakCount={streakCount}
          setLongestStreak={setLongestStreak}
          longestStreak={longestStreak}
        />
        <HStack>
          <Button onClick={() => decrement(count)}>previous quiz</Button>
          <Button onClick={() => increment(count)}>Next quiz</Button>
          <Button>Shuffle Cards</Button>
        </HStack>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
