import { Box, Container, Image, Stack, Text } from '@chakra-ui/react'

const PaymentMethods = () => {
  return (
    <>
    <Container centerContent >
        <Stack 
            direction="row"
            justifyContent="center"
            alignItems="center" 
            backgroundColor='white' boxShadow='md'
            width='140vh'
            sx={{padding:'0px 10px 0px 20px',margin:'50px 10px 10px 50px'}}>
            <Stack direction='column' justifyContent='center' >
                <Stack direction='row' p={2}>
                    <Image
                    w={12}
                    h={12}
                    src='https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/credit-card.svg'/>
                    <Stack direction='column' lineHeight='0.5'>
                        <Text fontWeight='bold' fontSize='18px' >Tarjeta de crédito</Text>
                        <Text fontSize='14px'>Ver promociones bancarias</Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction='column' justifyContent='center'>
                <Stack direction='row' p={2}>
                        <Image
                        w={12}
                        h={12}
                        src='https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/debit-card.svg'/>
                        <Stack direction='column' lineHeight='0.5'>
                            <Text fontWeight='bold' fontSize='18px'>Tarjeta de débito</Text>
                            <Text fontSize='14px'>Ver más</Text>
                        </Stack>
                </Stack>
            </Stack>
            <Stack direction='column' justifyContent='center'>
                <Stack direction='row' p={2}>
                    <Image
                    w={12}
                    h={12}
                    src='https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/mercado-creditsv2.svg'/>
                    <Stack direction='column' lineHeight='0.5'>
                        <Text fontWeight='bold' fontSize='18px'>Cuotas sin tarjeta</Text>
                        <Text fontSize='14px'>Conocé Mercado Crédito</Text>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction='column' justifyContent='center'>
            <Stack direction='row' p={2}>
                <Image
                    w={12}
                    h={12}
                    src='https://http2.mlstatic.com/resources/frontend/homes-korriban/assets/images/payments/payment-agreement.svg'/>
                    <Stack direction='column' lineHeight='0.5'>
                        <Text fontWeight='bold' fontSize='18px'>Efectivo</Text>
                        <Text fontSize='14px'>Ver más</Text>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    </Container>
    </>
  )
}

export default PaymentMethods