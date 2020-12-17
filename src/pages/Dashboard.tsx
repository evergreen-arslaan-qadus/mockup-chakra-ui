import React from 'react'
import { Box, Button, Heading } from '@chakra-ui/react';
import { ArrowForward } from '@material-ui/icons';
import Card from '../components/Card';

const Dashboard = () => {
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
            <Box display="flex" justifyContent="flex-end" paddingTop="1rem">
                <Button
                    color="white"
                    bgColor="#1c9e29"
                    borderRadius="25px"
                    rightIcon={<ArrowForward />}
                >
                    See all patients
                </Button>
            </Box>
        </>
    )
}

export default Dashboard
