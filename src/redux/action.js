import { CHANGE_QUESTION_CATEGOTY, CHANGE_QUESTION_DIFFICULTY, CHANGE_QUESTION_TYPE, CHANGE_SCORE } from "./actionType";


export const handleCategryChange = (payload) => ({
    type:CHANGE_QUESTION_CATEGOTY,
    payload,
});
export const handleDifficultyChange = (payload) => ({
    type:CHANGE_QUESTION_DIFFICULTY,
    payload,
});
export const handleTypeChange = (payload) => ({
    type:CHANGE_QUESTION_TYPE,
    payload,
});
export const handleScoreChange = (payload) => ({
    type:CHANGE_SCORE,
    payload,
});