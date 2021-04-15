import React, { useState } from 'react';
import './App.css';

export type ques = {
    question: string,
    incorrect_answers: string[]
}


const Question = ({ option, callback }: { option: ques, callback: (e: React.FormEvent<EventTarget>, val: string) => void }) => {
    //let correct = option.correct_answer;
   // console.log(correct);
    let { question, incorrect_answers } = option;
    let [answer, setAnswer] = useState("")
    //console.log(question);
    //console.log(answer);
    const handleAnswer = (val: any) => {
        setAnswer(val)
    }
    return (
        <>
            <h1>{question}</h1>
            <form onSubmit={(e: React.FormEvent<EventTarget>) => callback(e, answer)}>
                {
                    incorrect_answers.map((value: string, ind: number) => {
                        return (
                            <div key={ind}>
                                <label>
                                    <input type='radio' name='opt' value={value} onChange={() => handleAnswer(value)} checked={answer === value} required />{value}
                             </label>
                         </div>      
                );
                 })
                }{
                    answer ?
                        <input type='submit' value='NEXT' id='submit' /> : <p></p>
                }
                </form>
        </>
            )
}
export default Question;