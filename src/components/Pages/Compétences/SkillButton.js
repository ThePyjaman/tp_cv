import {Button,Box, Text, Distribution} from "grommet";
import React from "react";
import Web from "./Details/Web";
import Guignol from "./Details/Guignol";
import Logiciel from "./Details/Logiciel";
import Docker from "./Details/Docker";

let clicked = false
export default class SillButton extends React.Component{

    constructor() {
        super();
    }
    render()
    {
        if(!clicked)
        {
            return <Box align= 'center' pad='xsmall' background={this.props.color} fill={true} >
                <Button alignSelf= 'center' fill='true' onClick={() =>  {
                    clicked = !clicked
                    this.forceUpdate()
                }}>
                    <Text size='large'>{this.props.content}</Text>
                </Button>
            </Box>
        }
        else if(this.props.content == "Développement Web")
        {
            return <Box align= 'center' pad='xsmall' background={this.props.color} fill={true} >
                <Button alignSelf= 'center' fill='true' onClick={() =>  {
                    clicked = !clicked
                    this.forceUpdate()
                }}>
                    <Web/>
                </Button>
            </Box>
        }
        else if(this.props.content == "Développement Logiciel")
        {
            return <Box align= 'center' pad='xsmall' background={this.props.color} fill={true} >
                <Button alignSelf= 'center' fill='true' onClick={() =>  {
                    clicked = !clicked
                    this.forceUpdate()
                }}>
                    <Logiciel/>
                </Button>
            </Box>
        }
        else if(this.props.content == "Docker")
        {
            return <Box align= 'center' pad='xsmall' background={this.props.color} fill={true} >
                <Button alignSelf= 'center' fill='true' onClick={() =>  {
                    clicked = !clicked
                    this.forceUpdate()
                }}>
                    <Docker/>
                </Button>
            </Box>
        }
        else if(this.props.content == "Faire le guignol")
        {
            return <Box align= 'center' pad='xsmall' background={this.props.color} fill={true} >
                <Button alignSelf= 'center' fill='true' onClick={() =>  {
                    clicked = !clicked
                    this.forceUpdate()
                }}>
                    <Guignol/>
                </Button>
            </Box>
        }
    }

}