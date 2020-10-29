import React from 'react';
import { Box, Tab, Tabs, Text, Image } from 'grommet';
import Skills from './Pages/Compétences/Skills'
import Chronology from './Pages/Expériences Pro/Chronology'

export default () => (
    <layout>
        <Tabs height='medium' flex='grow' alignSelf='center'>
            <Tab title='Compétences'>
                <Box
                    margin='small'
                    pad='small'
                >
                    <Skills/>
                </Box>
            </Tab>
            <Tab title='Expériences Pro'>
                <Box
                    margin='small'
                    pad='small'
                >
                    <Chronology/>

                </Box>
            </Tab>
        </Tabs>
    </layout>
);
