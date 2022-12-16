import { Box, Center, Flex, Icon, Image, Text } from '@chakra-ui/react'
import { BellIcon } from '@chakra-ui/icons'
import * as React from 'react'
import { MessageProps } from '../../../interfaces/Home/IMessage'
import { NotificationBoxProps } from '../../../interfaces/Home/INotificationBox'
import { PrivateMessageProps } from '../../../interfaces/Home/IPrivateMessage'

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


    const [icon, setIcon] = React.useState(true)

    return (
        <>       
            <Box mt={'10px'} mb={'10px'} ml={'50px'} mr={'50px'} display={'flex'} flexDirection='row' minW={'500px'} 
                onMouseEnter={() => setIcon(false)}
            >
                {/* Profile Picture */}
                <Box>
                    <Image
                        borderRadius={'full'}
                        boxSize={'50'}
                        alt='Profile Picture'
                        src={image}
                    />
                </Box>

                {/* Message */}
                <Box w={'100%'} display={'flex'} flexDirection='column'>
                    <Box w={'100%'} display={'flex'} flexDirection='column'>
                    <Text ml={'10px'}>
                        <Text as='b'>
                            {name}
                        </Text>
                        {message}
                        <Text as='b'>
                            {action}
                        </Text>
                        {icon && (
                            <Icon
                                viewBox='0 0 200 200'
                                color='red.500'
                            >
                                <path 
                                    fill='currentColor'
                                    d='M 100, 100 m -75, 0 a 75, 75 0 1, 0 150, 0 a 75, 75 0 1, 0 -150, 0'
                                />
                            </Icon>
                        )}
                    </Text>                
                    </Box>
                    <Text ml={'10px'} fontSize={'14px'} color='gray'>
                        {time}
                    </Text>
                        {children}
                </Box>
            </Box>       
        </>
    )
}