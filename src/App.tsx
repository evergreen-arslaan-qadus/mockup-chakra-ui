import React from 'react';
import { Flex } from '@chakra-ui/react';
import InfoPanel from './components/InfoPanel'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <Flex>
            <Flex minWidth="5vw">
                <Sidebar />
            </Flex>
            <Flex direction="column" p="4rem" pr="2rem" minWidth="75vw">
                <Dashboard />
            </Flex>
            <Flex minWidth={{ sm: 0, md: '10vw', lg: '20vw' }}>
                <InfoPanel />
            </Flex>
        </Flex>
    );
}

export default App;
