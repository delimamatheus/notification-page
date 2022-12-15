import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react'
import * as React from 'react'
import { MessageProps } from '../../../interfaces/Home/IMessage'
import { NotificationBoxProps } from '../../../interfaces/Home/INotificationBox'
import { PrivateMessageProps } from '../../../interfaces/Home/IPrivateMessage'

export function Message({
    name,
    message,
    action,
}: MessageProps){
    return (
        <>
            <Text ml={'10px'}>
                <Text as='b'>
                    {name}
                </Text>
                {message}
                <Text as='b'>
                    {action}
                </Text>
                <Icon
                    viewBox='0 0 200 200'
                    color='red.500'
                    opacity='75%'
                    w='25px'
                >
                    <path 
                        fill='currentColor'
                        d='M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0'
                    />
                </Icon>
            </Text>
        </>
    )
}

export function PrivateMessage({
    message
}: PrivateMessageProps){
    return (
        <>
            <Box bgColor={'RGBA(0, 0, 0, 0.04)'} ml={'10px'} boxShadow={'md'} w={'100%'}>
                <Text p={'10px'}>{message}</Text>
            </Box>
        </>
    )
}

export function NotificationBox({
    image,
    name,
    message,
    action,
    time,
    children
}: NotificationBoxProps){
    return (
        <>            
            <Box mt={'30px'} mb={'30px'} ml={'50px'} mr={'50px'} display={'flex'} flexDirection='row' minW={'500px'}>
                {/* Profile Picture */}
                <Box>
                    <Image
                        borderRadius={'50%'}
                        boxSize={'50'}
                        alt='Profile Picture'
                        src={image}
                    />                    
                </Box>

                {/* Message */}
                <Box w={'100%'}>
                    <Message 
                        name={name}
                        message={message}
                        action={action}
                    />
                    <Text ml={'10px'} fontSize={'14px'} color='gray'>
                        {time}
                    </Text>
                    {children}
                </Box>
            </Box>            
        </>
    )
}