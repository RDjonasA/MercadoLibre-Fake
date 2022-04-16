import { Divider, Image, Stack, StackDivider, Text } from '@chakra-ui/react'
import React from 'react'
import { Container } from 'react-bootstrap'

const Ofertas = () => {
  return (
    <>
    <Container>
    <Stack mt={12}>
        <Stack alignItems="center" direction="row">
          <Text fontSize="26px">Ofertas</Text>
          <Text color="blue.400">Ver todas</Text>
        </Stack>
        <Stack direction="row" spacing={6}>
            <Stack
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src='https://http2.mlstatic.com/D_Q_NP_838928-MLA49171806749_022022-AB.webp' w={200}/>
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">$30.000</Text>
                  <Text color="green.400" fontSize="sm">
                    10% off
                  </Text>
                </Stack>
                
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
              </Stack>
            </Stack>
            <Stack
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src='https://http2.mlstatic.com/D_Q_NP_2X_870204-MLA47148930854_082021-AB.webp' w={200}/>
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">$19.481</Text>
                </Stack>
                
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
              </Stack>
            </Stack>
            <Stack
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src='https://http2.mlstatic.com/D_Q_NP_2X_628853-MLA48045572776_102021-AB.webp' w={200} />
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">$31.049</Text>
                  <Text color="green.400" fontSize="sm">
                    55% off
                  </Text>
                </Stack>
                
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
              </Stack>
            </Stack>
            <Stack
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src='https://http2.mlstatic.com/D_Q_NP_2X_627149-MLA44484230438_012021-AB.webp' w={200}/>
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">$89.999</Text>
                  <Text color="green.400" fontSize="sm">
                    10% off
                  </Text>
                </Stack>
                
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
              </Stack>
            </Stack>
            <Stack
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src='	https://http2.mlstatic.com/D_Q_NP_2X_997940-MLA47767920611_102021-AB.webp' w={200} />
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">$41.799</Text>
                  <Text color="green.400" fontSize="sm">
                    9% off
                  </Text>
                </Stack>
                
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
              </Stack>
            </Stack>
            <Stack
              _hover={{ shadow: "md" }}
              bg="white"
              borderRadius="md"
              divider={<StackDivider />}
            >
              <Image src='https://http2.mlstatic.com/D_Q_NP_838928-MLA49171806749_022022-AB.webp'  w={200} />
              <Stack pb="16px" px="12px" spacing={0}>
                <Stack alignItems="center" direction="row">
                  <Text fontSize="22px">$30.000</Text>
                  <Text color="green.400" fontSize="sm">
                    10% off
                  </Text>
                </Stack>
                
                  <Text color="green.400" fontSize="sm" fontWeight="bold">
                    Envío gratis
                  </Text>
              </Stack>
            </Stack>
        </Stack>
      </Stack>
    </Container>
    </>
  )
}

export default Ofertas