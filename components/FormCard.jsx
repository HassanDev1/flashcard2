import {
  Button,
  FormControl,
  FormLabel,
  Input,
  HStack,
} from "@chakra-ui/react";

const FormCard = ({ handleStreak, setVal, val, isCorrect }) => {
  const handlechange = (e) => {
    setVal(e.target.value);
  };

  return (
    <HStack align={"end"}>
      <FormControl>
        <FormLabel>Guess the answer here:</FormLabel>
        <Input
          type='text'
          borderColor={isCorrect ? "green.300" : "red.300"}
          placeholder=''
          value={val}
          onChange={handlechange}
        />
      </FormControl>
      <Button onClick={() => handleStreak(val)}>Submit Guess</Button>
    </HStack>
  );
};

export default FormCard;
