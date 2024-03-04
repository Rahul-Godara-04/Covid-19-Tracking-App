import { Card, CardContent, Typography } from '@material-ui/core';
import "./infoBox.css";
import React from 'react';

function InfoBox({ title, cases, active, isRed, total, ...props }) {
    return (
        <Card
            onClick={props.onClick}
            className={`infoBox ${active && "infoBox--selected"} 
            ${isRed && "infoBox--red"}`}>
            <CardContent>
                <Typography className='infoBox_title' color='textSecondary'>
                    {title}
                </Typography>
                <h2 className={`infobox_cases ${!isRed && "infoBox_cases--green"}`}>{cases}</h2>
                <Typography className='infoBox_total'>
                    {total} Total
                </Typography>
            </CardContent>
        </Card>
    )
}

export default InfoBox
