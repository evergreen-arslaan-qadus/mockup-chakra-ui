import React, { useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { ArrowForward } from '@material-ui/icons';
import Card from '../components/Card';
import { Collapse } from '@material-ui/core';

const Dashboard = () => {
    const [showAllPatients, setShowAllPatients] = useState(false);
    const Cards = [0, 1, 2, 3].map(item => (<Card useModal={item % 2 === 0} />));

    return (
        <>
            <Box>
                <Heading as="h3" size="2xl">
                    Dashboard
                </Heading>
            </Box>
            <Box paddingTop="4rem" paddingBottom="2rem">
                <Heading as="h5" size="md" color="gray.600">
                    Last Visited Patients
                </Heading>
            </Box>
            <Flex justifyContent="space-between">
                {Cards}
            </Flex>
            <Collapse in={showAllPatients} collapsedHeight={0}>
                <Flex justifyContent="space-between" pt="2rem">
                    <Card preset={1} />
                    <Card preset={2} />
                    <Card preset={3} />
                    <Card />
                </Flex>
            </Collapse>
            <Flex justifyContent="flex-end" paddingTop="1rem">
                <Button
                    onClick={() => setShowAllPatients(!showAllPatients)}
                    color="white"
                    bgColor="#1c9e29"
                    borderRadius="25px"
                    rightIcon={<ArrowForward />}
                    _hover={{ background: "#167e20", color: 'white' }}
                    _active={{ background: "#136e1c", color: 'white' }}
                >
                    {showAllPatients ? "Hide" : "See"} all patients
                </Button>
            </Flex>
        </>
    )
}

export default Dashboard
