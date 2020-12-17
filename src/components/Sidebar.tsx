import React from 'react'
import { Flex, Box, Button, Icon, Text, VStack } from '@chakra-ui/react'
import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import PersonOutline from '@material-ui/icons/PersonOutline';
import PeopleOutline from '@material-ui/icons/PeopleOutline';

const Sidebar = () => {
    return (
        <Flex backgroundColor="#1c9e29">
            <Flex height="100vh" direction="column">
                <Box padding="1.5rem">
                    <img src="/logo.svg" alt="logo" width="65px" />
                </Box>
                <Box height="100%" display="flex" alignItems="center">
                    <Flex height="400px" direction="column">
                        <Button height="150px" variant="ghost" color="white">
                            <VStack>
                                <Icon as={DashboardOutlined} />
                                <Text>Dashboard</Text>
                            </VStack>
                        </Button>
                        <Button height="150px" variant="ghost" color="white">
                            <VStack>
                                <Icon as={PersonOutline} />
                                <Text>Person</Text>
                            </VStack>
                        </Button>
                        <Button height="150px" variant="ghost" color="white">
                            <VStack>
                                <Icon as={PeopleOutline} />
                                <Text>People</Text>
                            </VStack>
                        </Button>
                    </Flex>
                </Box>
            </Flex>
        </Flex>
    )
}

export default Sidebar
