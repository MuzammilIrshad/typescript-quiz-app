import React from 'react';
import './App.css';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 auto',
        transform: 'scale(0.8)',
        alignContent: 'center'
    },
    title: {
        fontSize: 18,
        textAlign: 'center'
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Result({ score, count }: { score: number, count: number }) {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const finalResult = 'Obtained: ' + score;
    const total = ' Total Marks: ' + count;
    return (
        <Card className={classes.root} id='question'>
        <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom id='title'>
               RESULT:
        </Typography>
            <Typography color="textSecondary" gutterBottom>
                    <div id='result'>

                        <h2>{finalResult}</h2>
                        <h2>{total}</h2>
                </div>
            </Typography>
        </CardContent>
    </Card>
     
        )
}