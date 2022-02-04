import { Box, Button, CircularProgress,Typography } from "@mui/material";
import useAxios from "../hooks/useAxios";
//import { response, error, loading } from "../hooks/useAxios";
import { useNavigate} from 'react-router-dom';
import SelectField from "./components/SelectField";
import TextFieldComp from "./components/TextFieldComp";

const Settings = () => {
  console.log("in setting");
  const { response, error, loading } = useAxios({ url: "/api_category.php" });
  console.log(response);
const navigate = useNavigate();

  if (loading) {
    return (
      <Box mt={20} alignItems="center">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box mt={20} alignItems="center">
        <Typography variant="h2" color="red">
          Something Went Wrong
        </Typography>
      </Box>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/questions");
  };

  const difficultyOptions = [
    {id: "easy", name:"Easy"},
    {id: "medium", name:"Medium"},
    {id: "hard", name:"Hard"},
  ];

  const typeOptions = [
    {id: "multiple", name:"Multiple Choice"},
    {id: "boollean", name:"True/False"}
    
  ];



  return (
    <form onSubmit={handleSubmit}>
      
      <SelectField options = {response.trivia_categories} label="Category" />
      <SelectField options = {difficultyOptions} label="Difficulty" />
      <SelectField options = {typeOptions} label="Type" />
      <TextFieldComp />
      <Box mt={3} width="100%">
        <Button fullWidth variant="contained" type="submit">
          Get Sarted
        </Button>
      </Box>
    </form>
  );
};

export default Settings;
