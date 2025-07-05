import React, { useEffect,useState } from 'react'
import Questions from '../data/Questions';
import { useNavigate } from 'react-router-dom';
import './Quiz.css'



const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const [answers, setAnswers] = useState(Array(Questions.length).fill(null)); // each index holds selected score
    const [score, setScore] = React.useState(0);
    const [answered, setAnswered] = React.useState(false);
    const [selectedScore, setSelectedScore] = React.useState(null);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

const navigate=useNavigate();


const handleOptionClick=(scoreValue)=>{
    setSelectedScore(scoreValue);
    setAnswered(true)
}
  

const handleNext=()=>{
    if(answered){
      const updateAns=[...answers];
      updateAns[currentQuestion]=selectedScore;
      setAnswers(updateAns)
        setScore(score+selectedScore);
    
        setCurrentQuestion((prev)=>prev+1);
        setSelectedScore(updateAns[currentQuestion+1]);  // preload next score if answered before
        setAnswered(updateAns[currentQuestion+1]!==null);

    }

}


       const handleSubmit = () => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = selectedScore;
    setAnswers(updatedAnswers);
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted) {
      const totalScore = answers.reduce((acc, val) => acc + (val || 0), 0);
      navigate('/result', {
        state: {
          score: totalScore,
          total: Questions.length * 3 // since max per question is 3
        }
      });
    }
  }, [isSubmitted]);
  



    

   
  

  return (
    <div className='quiz-container'>
      <h2>Question {currentQuestion + 1} of {Questions.length}</h2>
    <h3>{Questions[currentQuestion].question}</h3>
    <div className='options'>
        {Questions[currentQuestion].options.map((option,index) => {
            return (
            
                    <button
                        key={index}
                        onClick={()=>handleOptionClick(option.score)}
                        style={{backgroundColor:selectedScore===option.score?'#cdeffd' : '',
                           margin: '10px',
              padding: '10px'  
                        }}
                        >
                        {option.text}
                    </button>
            
            )
        })}
       
    </div>
     
      <div className="navigation-buttons">
       
        
        <button className="next-btn" onClick={handleNext} disabled={currentQuestion ===Questions.length -1 }>
          Next
        </button>
        {currentQuestion === Questions.length - 1 && 
          // Conditionally render the submit button if score > threshold; otherwise, show a message.
            (
            <button className="submit-btn" onClick={handleSubmit} disabled={!answered} >
              Submit Quiz
            </button>
          )}
        </div>
    </div>
  )
}

export default Quiz;
