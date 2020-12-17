import React, { useState } from 'react'
import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import { ArrowForward } from '@material-ui/icons';
import Card from '../components/Card';
import { Collapse } from '@material-ui/core';

const Dashboard = () => {
    const [showAllPatients, setShowAllPatients] = useState(false);
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
            <Box display="flex" justifyContent="space-between">
                <Card />
                <Card />
                <Card />
                <Card />
            </Box>
            <Collapse in={showAllPatients} collapsedHeight={0}>
                <Flex justifyContent="space-between" pt="2rem">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </Flex>
            </Collapse>
            <Box display="flex" justifyContent="flex-end" paddingTop="1rem">
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
            </Box>
        </>
    )
}

export default Dashboard
