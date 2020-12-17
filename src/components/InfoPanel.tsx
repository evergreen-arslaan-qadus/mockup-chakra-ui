import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import Notification from './Notification';

const InfoPanel = () => {
    return (
        <Box height="100%" paddingLeft="2rem" borderLeft="1px" borderLeftColor="gray.300" bgColor="white">
            <Box paddingTop="4rem" paddingBottom="2rem">
                <Heading as="h6" size="sm" color="gray.600">Recent recieved notifications</Heading>
            </Box>
            <Notification />
            <Notification />
            <Notification />
            <Notification />
        </Box>
    )
}

export default InfoPanel
