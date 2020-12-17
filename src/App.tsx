import React from 'react';
import { Flex } from '@chakra-ui/react';
import InfoPanel from './components/InfoPanel'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App() {
    return (
        <Flex>
            <Sidebar />
            <Flex direction="column" p="4rem" pr="2rem" minWidth="75vw">
                <Dashboard />
            </Flex>
            <InfoPanel />
        </Flex>
    );
}

export default App;
