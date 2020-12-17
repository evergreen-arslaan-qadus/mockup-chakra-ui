import React from 'react'
import { Flex, Box, Button, Icon, Text, VStack, Image, useDisclosure, Slide } from '@chakra-ui/react'
import DashboardOutlined from '@material-ui/icons/DashboardOutlined';
import PersonOutline from '@material-ui/icons/PersonOutline';
import PeopleOutline from '@material-ui/icons/PeopleOutline';

const Sidebar = () => {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Flex backgroundColor="#1c9e29">
            <Flex height="100vh" direction="column">
                <Box padding="1.5rem" pt="3rem" as="button" onClick={onToggle}>
                    <Image src="/logo.svg" alt="logo" width="65px" />
                </Box>
                <Box height="100%" display="flex" alignItems="center">
                    <Flex height="400px" direction="column">
                        <Button height="150px" variant="ghost" color="white" _hover={{ background: "#198e24" }} _active={{ background: "#167e20" }}>
                            <VStack>
                                <Icon as={DashboardOutlined} />
                                <Text>Dashboard</Text>
                            </VStack>
                        </Button>
                        <Button height="150px" variant="ghost" color="white" _hover={{ background: "#198e24" }} _active={{ background: "#167e20" }}>
                            <VStack>
                                <Icon as={PersonOutline} />
                                <Text>Person</Text>
                            </VStack>
                        </Button>
                        <Button height="150px" variant="ghost" color="white" _hover={{ background: "#198e24" }} _active={{ background: "#167e20" }}>
                            <VStack>
                                <Icon as={PeopleOutline} />
                                <Text>People</Text>
                            </VStack>
                        </Button>
                    </Flex>
                </Box>
            </Flex>
            <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
                <Box
                    p="3rem"
                    color="white"
                    mt="4"
                    bg="teal.400"
                    rounded="md"
                    shadow="md"
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.
                    <Box d="flex" justifyContent="flex-end" onClick={onToggle} >
                        <Button bgColor="teal.600" _hover={{ bgColor: 'teal.700' }} _active={{ bgColor: 'teal.800' }}>
                            Close
                        </Button>
                    </Box>
                </Box>
            </Slide>
        </Flex>
    )
}

export default Sidebar
