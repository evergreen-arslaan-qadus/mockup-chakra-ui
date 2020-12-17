import React, { useState } from 'react'
import { Box, Button, Collapse } from '@chakra-ui/react'


const Card = () => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Box width="265px" borderWidth="1px" borderRadius="lg" borderColor="gray.300" bgColor="white">
            <Box p="8">
                <Box d="flex" alignItems="baseline">
                    <Box
                        color="black"
                        fontWeight="bold"
                        fontSize="lg"
                    >
                        WILLIAMS,
                        <br />
                        Jonatan Simson
                    </Box>
                </Box>
                <Box d="flex" alignItems="baseline">
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                    >
                        NHS 123 567 766
                    </Box>
                </Box>
                <Box pt="8" pb="8">
                    <hr />
                </Box>
                <Box
                    color="gray.500"
                    fontWeight="semibold"
                >
                    GENDER
                </Box>
                <Box
                    lineHeight="2"
                    fontWeight="semibold"
                >
                    Male
                </Box>
                <Box
                    pt="4"
                    color="gray.500"
                    fontWeight="semibold"
                >
                    BORN
                </Box>
                <Box
                    lineHeight="2"
                    fontWeight="semibold"
                >
                    14-Jul-1956 (39y)
                </Box>
                <Collapse startingHeight={0} in={showDetails}>
                    <Box
                        pt="4"
                        color="gray.500"
                        fontWeight="semibold"
                    >
                        MORE DETAILS
                    </Box>
                    <Box
                        lineHeight="2"
                        fontWeight="semibold"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultrices viverra magna, et congue magna dapibus sed. Aenean placerat commodo lectus, eu tempor orci gravida in.
                    </Box>
                </Collapse>
                <Box pt="8" pb="6">
                    <hr />
                </Box>
                <Button
                    color="#198e24"
                    bgColor="inherit"
                    fontWeight="bold"
                    onClick={() => setShowDetails(!showDetails)}
                    _hover={{ background: "rgba(28, 158, 41, 0.9)", color: 'white' }}
                    _active={{ background: "#198e24", color: 'white' }}
                >
                    {showDetails ? "Hide" : "See"} details
                </Button>
            </Box>
        </Box>
    )
}

export default Card
