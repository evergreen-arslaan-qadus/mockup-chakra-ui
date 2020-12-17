import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import Card from './components/Card';

function App() {
    return (
        <Flex p="10" justifyContent="space-between">
            <Card />
            <Card />
            <Card />
            <Card />
        </Flex>
    );
}

export default App;
