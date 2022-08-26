import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
    VStack,
  } from '@chakra-ui/react';
  
  export default function FooterCommon() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}
        fontFamily={"Neue-Helvetica"}
        fontSize={"12px"}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          fontFamily="Neue-Helvetica"
          fontSize="12px"
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Stack direction={'row'} spacing={6}>
            <Text>INDIA</Text>
          </Stack>
          <Text>ENGLISH</Text>
          <Text>©All rights reserved</Text>
          
        </Container>
        <VStack alignItems={"left"} ml={"5%"}>
            <Container>
            Name and address of the Manufacturer                
            </Container>
            <Container>
                Industria De  diseno Textil               
            </Container>
            <Container>
                Avendida De la diputaction,edifico inditex
            </Container>
        </VStack>
      </Box>
    );
  }