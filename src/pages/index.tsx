import { Box, Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../../styles/Home.module.css'
import { NotificationBox, NotificationHeader, PrivateMessage } from '../components/pages/Home'
import { MainLayout } from '../layout/MainLayout'

export default function Home() {  

  const [icon, setIcon] = useState(true)

  const readIconHandler = () => {
    setIcon(false)
  }

  return (
    <Center>
    <Box>
      <Head>
        <title>Notification Page</title>
        <meta name="description" content="Notification Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Center>
          <Box 
            bgColor={'#FAF5FF'}
            w={{base: '300px', lg: '800px'}}
            h={{base: '500px', lg: '550px'}}
            mt={'100px'}
            mb={'100px'}
            boxShadow={'2xl'}
            display={'flex'}
            flexDirection={'column'}
          >
            <NotificationHeader 
              icon={icon} 
              setIcon={readIconHandler}
            />

            <NotificationBox 
              image={'https://bit.ly/dan-abramov'}
              name={'Matheus'}
              message={' followed you '}
              action={''}
              icon={icon}
              time={'23h ago'}
            />                        

            <NotificationBox 
              image={'https://bit.ly/dan-abramov'}
              name={'Andrius'}
              message={' reacted to your recent post '}
              action={'Game Day!'}
              time={'1d ago'}
              icon={icon}
            />            
            

            <NotificationBox 
              image={'https://bit.ly/dan-abramov'}
              name={'Lucas'}
              message={' sent you a private message '}
              action={''}
              time={'1 week ago'}
              icon={icon}
            >            
              <PrivateMessage 
                message='This is just a private message. Please send me a private message too. Now I am writing this just to break the line.'
              />
            </NotificationBox>            

            <NotificationBox 
              image={'https://bit.ly/dan-abramov'}
              name={'Lucas'}
              message={' liked your photo '}
              action={''}
              time={'1 month ago'}
              icon={icon}
            />            
            
          </Box>
        </Center>
      </MainLayout>
    </Box>
    </Center>
  )
}
