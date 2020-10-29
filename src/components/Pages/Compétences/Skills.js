import {Button,Box, Text, Distribution} from "grommet";
import React from "react";
import Layout from "../../Layout";
import SkillButton from "./SkillButton";

export default () => (
    <Layout align='stretch' pad={{ horizontal: 'large' }}>
        <Distribution
            basis='large'
            values={[
                { value: 60, color: 'neutral-4', content: "Développement Web" },
                { value: 20, color: 'neutral-2', content: "Développement Logiciel"},
                { value: 10, color: 'neutral-1', content: "Docker" },
                { value: 10, color: 'neutral-3', content: "Faire le guignol" },
            ]}
        >
            {value => (
                <SkillButton color={value.color} content={value.content} />
            )}
        </Distribution>
    </Layout>
);