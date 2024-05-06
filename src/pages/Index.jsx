import { Container, VStack, Stat, StatLabel, StatNumber, StatHelpText, StatGroup, Box } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" flex="1" borderRadius="md">
          <StatGroup>
            <Stat>
              <StatLabel>
                <Icon as={FaShoppingCart} mr={2} />
                Sales
              </StatLabel>
              <StatNumber>1,234</StatNumber>
              <StatHelpText>Since last month</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>
                <Icon as={FaDollarSign} mr={2} />
                Revenue
              </StatLabel>
              <StatNumber>$50,304</StatNumber>
              <StatHelpText>Since last month</StatHelpText>
            </Stat>
            <Stat>
              <StatLabel>
                <Icon as={FaUsers} mr={2} />
                New Customers
              </StatLabel>
              <StatNumber>98</StatNumber>
              <StatHelpText>Since last month</StatHelpText>
            </Stat>
          </StatGroup>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
