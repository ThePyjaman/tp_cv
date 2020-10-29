import React from "react"
import { Chrono } from "react-chrono";
import Layout from "../../Layout";

export default () => {
    const items = [
        {
            title: "Aout 2012 - 2 semaines",
            contentTitle: "Stage Chez Intel",
            contentText:"Testeurs d'applications mobile",
        },
        {
            title: "Avril 2017 - Aout 2017",
            contentTitle: "Stage Chez Bouygues Telecom",
            contentText:"Mise de place de dispositifs de diagnostiques sur les boitiers fibre des clients",
        },
        {
            title: "Octobre 2018 - Septembre 2020",
            contentTitle: "Alternance chez Airbus",
            contentText:"Création d'une interface VR à un logiciel de Modélisation 3D",
        },
        {
            title: "Spetembre 2020 - AJD",
            contentTitle: "Alternance chez BPCE-IT",
            contentText:"Mise en place d'une interface de monitoring de KPI",
        },
    ];

    return (
        <Layout align='center' pad={{ horizontal: 'large' }}>
            <Chrono items={items} mode='VERTICAL'/>
        </Layout>
    )
}