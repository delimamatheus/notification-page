import { Center, Flex, Grid, GridItem, Text, Box } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'

export function Footer() {
  return (
    <Center>
      <Box 
        display={'flex'}
        flexDirection='row'
      >
        <Text>
          Powered by <Text as='b'>Matheus de Lima</Text>
        </Text>        
      </Box>
    </Center>
  )
}
