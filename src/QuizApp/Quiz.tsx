import React, { useEffect, useState } from 'react';
import { data, Quiz } from './Api';
import Question from './Question';
import Result from './Result';
//import { useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
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
        textAlign:'center'
    },
    pos: {
        marginBottom: 12,
    },
});
       

export default function Quizdetails() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    let [state, setState] = useState <Quiz[]> ([]);
    const [count, setCount] = useState<number>(0);
    let [score, setScore] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function exam() {
            let quizData: Quiz[] = await data('easy');
            //console.log(quizData);
            setState(quizData)
 
        }
        exam();
    }, []);
     
    const handleClick = (e: React.FormEvent<EventTarget>, val: string) => {
        e.preventDefault();
        console.log(val);
        const correctAnswer: Quiz = state[count];
        console.log(correctAnswer.correct_answer);
        if (val === correctAnswer.correct_answer) {
            setScore(() => score + 1);
        }
        //console.log(correctOnes);
        setCount(() => count + 1);
    }

    if (count > state.length - 1) {
        console.log("Quiz Completed..." + score + " out of " + count);
        return (
             <>
                 <Result score={score} count={count} />
                
             </>
         );
             }
    if (!loading) {
        return (
            <Card className={classes.root} id='question'>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        <div>
                            <input type='button' value='Get Started' onClick={() => setLoading(true)} id='getStart'/>
                        </div>
                    </Typography>
                </CardContent>
            </Card>
    )}
     else if (state.length === 0) {
        return <h1>Loading...</h1>
       }

       else {
          // console.log(state[count].correct_answer);
        return (
            <Card className={classes.root} id='question'>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom id='title'>
                        QUIZ 
        </Typography>
                    <Typography color="textSecondary" gutterBottom>
                        <div>

                            <Question option={state[count]} callback={handleClick} />
                        </div>   
        </Typography>
                </CardContent>
            </Card>
           
        )
}
}

