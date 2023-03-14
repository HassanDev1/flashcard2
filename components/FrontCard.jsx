import {
  Text,
  Card,
  CardBody,
  VStack,
  Image,
  Stack,
  Heading,
} from "@chakra-ui/react";
import "../src/App.css";
//

const FrontCard = ({ data, handleComponentClick, image }) => {
  return (
    <VStack onClick={handleComponentClick} className='rotating-component'>
      <Card w={"37.5em"} h={"12.5em"}>
        <CardBody align={"center"}>
          <Image
            boxSize='100px'
            objectFit='cover'
            src={image}
            alt=''
            fallbackSrc='https://via.placeholder.com/150'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Text align={"center"}>{data}</Text>
          </Stack>
        </CardBody>
      </Card>
    </VStack>
  );
};

export default FrontCard;
