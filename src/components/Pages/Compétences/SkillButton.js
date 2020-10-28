import {Button,Box, Text, Distribution} from "grommet";
import React from "react";
import Layout from "../../Layout";

export default (props) => (
                <Box align= 'center' pad='xsmall' background={props.color} fill={true}>
                    <Button alignSelf= 'center' fill='true'>
                        <Text size='large'>{props.content}</Text>
                    </Button>

                </Box>
);