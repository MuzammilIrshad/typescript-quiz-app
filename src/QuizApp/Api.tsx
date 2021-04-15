//import React from 'react';


export type QuestionType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string
};
export type Quiz = {
    question: string,
    correct_answer: string,
    incorrect_answers: string[]
}

export async function data(difficulty: string ): Promise<Quiz[]> {

    const question = await fetch(`https://opentdb.com/api.php?amount=5&category=22&difficulty=${difficulty}&type=multiple`);
    let { results } = await question.json();
    console.log(results);
    const quiz: Quiz[] = results.map((questionObj: Quiz, ind: number) => {
        return {
            question: questionObj.question,
            incorrect_answers: [...questionObj.incorrect_answers, questionObj.correct_answer],
            correct_answer: questionObj.correct_answer
        }
    })
    console.log(quiz);
    return quiz;
}