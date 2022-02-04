import {  useSelector } from "react-redux";
const  ScroeScreen =()=> {

    
    const {
        
        score,
      } = useSelector((state) => state);
    return <div>
  
        ScroeScreen {score}
    </div>;
  }
  
  export default ScroeScreen;
  