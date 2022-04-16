import { Image,Box,SimpleGrid, Stack, Text,Input, Icon, StackDivider, Container, Avatar, Hide, Flex, FormControl, Link } from '@chakra-ui/react'
import React from 'react'
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
const Nav = (props) => {
  return (<>
    <Stack alignItems='center' backgroundColor='red.200'>
    <Stack direction='row'>
      <Icon as={ErrorOutlineOutlinedIcon}/>
      <Text>Esto es una copia de Mercado Libre</Text>
    </Stack>
  </Stack>
    <Stack>
      <Box backgroundColor='primary' boxShadow='sm' paddingY={2}>
        <Container maxWidth='container.xl' paddingX={0}>
          <Stack spacing={3}>
            <Stack direction='row' justifyContent='space-between'>
              <Stack direction='row' flex={3} spacing={12}>
                <Link href='/'>
                  <a>
                    <Image
                      height='2.4rem'
                      objectFit='contain'
                      src='https://res.cloudinary.com/joriel/image/upload/v1650041776/web/wjo6sta46wcelfe0qktl.png'
                    />
                  </a>
                </Link>
                <FormControl>
                  <form >
                    <Stack
                      alignItems='center'
                      backgroundColor='white'
                      borderRadius='sm'
                      boxShadow='sm'
                      direction='row'
                      divider={<StackDivider />}
                      maxWidth={600}
                      padding={2}
                      rounded='sm'
                      width='100%'
                    >
                      <Input
                        _placeholder={{ color: 'gray.400' }}
                        paddingX={2}
                        placeholder='Buscar productos, marcas y más...'
                        variant='unstyled'
                        sx={{border:'none'}}
                      />
                      <Icon
                        as={SearchOutlinedIcon}
                        color='gray.400'
                        height={5}
                        width={5}
                      />
                    </Stack>
                  </form>
                </FormControl>
              </Stack>
              <Stack alignItems='center' direction='row'>
                <Image height={10} src='https://res.cloudinary.com/joriel/image/upload/v1650050185/web/mrbrd8smkjmny4op1itl.webp' width={380}/>
              </Stack>
            </Stack>
            <Stack
              alignItems='baseline'
              direction='row'
              justifyContent='space-between'
            >
              <Stack alignItems='baseline' direction='row' spacing={12}>
                <Stack
                  alignItems='center'
                  direction='row'
                  spacing={1}
                  width={150}
                >
                  <Icon
                    as={RoomOutlinedIcon}
                    color='gray.500'
                    height={8}
                  />
                  <Stack spacing={-4}>
                    <Text
                      color='gray.500'
                      fontSize='xs'
                    >
                      Enviar a
                    </Text>
                    <Text fontSize='sm'>
                      Chaco, Resistencia
                    </Text>
                  </Stack>
                </Stack>
                <Stack
                  color='gray.500'
                  direction='row'
                  fontSize='sm'
                  spacing={5}
                  justifyContent='space-between'
                >
                  <Text>
                    Categorias <Icon as={ArrowDownwardOutlinedIcon} />
                  </Text>
                  <Text>Ofertas</Text>
                  <Text>Historial</Text>
                  <Text>Supermercado</Text>
                  <Text>Moda</Text>
                  <Text>Vender</Text>
                  <Text>Ayuda</Text>
                </Stack>
              </Stack>
              <Stack direction='row' textColor='gray.500' fontSize='sm' spacing={8} alignItems='baseline'>
              <Stack direction='row' mt={5} alignItems='baseline'>
                  <Avatar size='xs' name='Joriel' display='flex' alignSelf='self-end' src='https://res.cloudinary.com/joriel/image/upload/v1649965998/web/ahsquuuidhyerqdjfble.png' width={6} />
                  <Text>Joriel</Text>
                  <Text>Mis compras</Text>
                  <Text>Favoritos</Text>
                  <Icon as={NotificationsNoneOutlinedIcon} alignSelf='self-end' height={6} width={6} color='gray.500'/>
                  <Icon as={ShoppingCartOutlinedIcon} alignSelf='self-end' height={6} width={6} color='gray.500'/>
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Stack>
    </>
    )
}

export default Nav
