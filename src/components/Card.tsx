import React from 'react'
import { Box } from '@chakra-ui/react'

const Card = () => {
    return (
        <Box minW="sm" borderWidth="1px" borderRadius="lg">
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
                <Box pt="8" pb="6">
                    <hr />
                </Box>
                <Box
                    as="button"
                    color="green.400"
                    fontWeight="bold"
                >
                    See details
                </Box>
            </Box>
        </Box>
    )
}

export default Card
