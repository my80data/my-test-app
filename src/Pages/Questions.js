import {
  Box,
  Button,
  ButtonGroup,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../redux/action";
import useAxios from "../hooks/useAxios";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Questions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score,
  } = useSelector((state) => state);
  console.log(
    question_category,
    question_difficulty,
    question_type,
    amount_of_question,
    score
  );
  let apiUrl = `/api.php?amount=${amount_of_question}`;
  if (question_category) {
    apiUrl = apiUrl.concat(`&category=${question_category}`);
  }
  if (question_difficulty) {
    apiUrl = apiUrl.concat(`&difficulty=${question_difficulty}`);
  }
  if (question_type) {
    apiUrl = apiUrl.concat(`&type=${question_type}`);
  }
  // console.log(apiUrl);
  const { response, error, loading } = useAxios({ url: apiUrl });

  const [questionIndex, setquestionIndex] = useState(0);
  const [option, setOption] = useState([]);
  console.log(option);
  useEffect(() => {
    // console.log("In Question useEffect");
    if (response?.results.length) {
      const question = response.results[questionIndex];
      let answers = [...question.incorrect_answers];

      answers.splice(
        getRandomInt(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOption(answers);
    }
  }, [response, questionIndex]);

  if (loading) {
    return (
      <Box mt={20}>
        <CircularProgress />
      </Box>
    );
  }

  console.log(response, error, loading);

  const handleClickAnswer = (e) => {
    const question = response.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score+1));
    }

    //alert(questionIndex);
    if (questionIndex < response.results.length - 1) {
      setquestionIndex(questionIndex + 1);
    } else {
      alert(questionIndex);
      navigate("/score");
    }
  };

  return (
    <Box>
      <Paper elevation={8} mt={3}>
        <Box mb={2} mt={2}>
          <Typography align="center" variant="button">
            {questionIndex + 1}
          </Typography>
        </Box>
        <Box>
          <Typography align="center" variant="button">
            {response.results[questionIndex].question}
          </Typography>
        </Box>

        <Box>
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical contained button group"
            variant="outlined"
          >
            {option.map((data, id) => (
              <Button onClick={handleClickAnswer} key={id}>
                {data}
              </Button>
            ))}
          </ButtonGroup>
        </Box>
      </Paper>
    </Box>
  );
};

export default Questions;
