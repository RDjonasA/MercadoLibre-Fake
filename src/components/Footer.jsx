import { Divider, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
<>
    <Divider/>
    <Stack alignItems="center" direction="row" alignContent='center'>  
        <Stack mt={0} spacing={-2}>
            <Stack direction='row' textAlign='center'  fontSize='12px' spacing={7}>
                <Text paddingLeft={12}>Trabajá con nosotros</Text>
                <Text>Términos y condiciones</Text>
                <Text>Cómo cuidamos tu privacidad</Text>
                <Text>Información al usuario financiero</Text>
                <Text>Ayuda</Text>
                <Text>Defensa del Consumidor</Text>
                <Text>Información sobre seguros</Text>
            </Stack>
        </Stack>
    </Stack>
    <Stack fontSize='12px' textColor='gray.500' spacing={-4}>
        <Text paddingLeft={12}>Copyright © 1999-2022 MercadoLibre S.R.L.</Text>
        <Text paddingLeft={12}>Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</Text>
    </Stack>
</>
  )
}

export default Footer