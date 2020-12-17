import React from 'react'
import { Box, Divider, Text, Icon, useDisclosure } from '@chakra-ui/react'
import { SaveOutlined, WatchLater } from '@material-ui/icons'
import { Collapse } from '@material-ui/core'
// import { SaveOutlined, WatchLater } from '@material-ui/icons';

const Notification = () => {
    const { isOpen, onToggle } = useDisclosure();
    return (
        <>
            <Box paddingY="0.25rem" onMouseEnter={onToggle} onMouseLeave={onToggle}>
                <Text color="pink.500" fontWeight="semibold" ><span>•</span> SMITH, Adam</Text>
            </Box>
            <Collapse in={isOpen}>
                <Box paddingY="1.25rem">
                    <Text style={{ display: 'flex' }}>
                        <Icon as={SaveOutlined} color="gray.500" mr="0.5rem" />
                        <Text color="gray.700">21-Jul-1956</Text>
                        <Icon as={WatchLater} color="gray.500" ml="1.75rem" mr="0.5rem" />
                        <Text color="gray.700">2 mins</Text>
                    </Text>
                </Box>
                <Box paddingTop="0.25rem" paddingBottom="4rem">
                    <Text>
                        Set ut prespiciatis un volupatem accusant totam rem aperiam, totam rem aperiam,
                </Text>
                </Box>
            </Collapse>
            <Divider />
        </>
    )
}

export default Notification
