import { Box, Text } from '@chakra-ui/react'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { MainLayout } from '../layout/MainLayout'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Notification Page</title>
        <meta name="description" content="Notification Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <Box className={styles.main}>
          <Text> CONTENT </Text>
        </Box>

      </MainLayout>
    </div>
  )
}
