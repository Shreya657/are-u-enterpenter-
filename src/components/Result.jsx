import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './Result.css'

const Result = () => {
    const location=useLocation()
    const {score,total}=location.state;

    const percentage=Math.round((score/total)*100);


    let badge='';
    if(percentage>=80){
        badge='🔥 Visionary Entrepreneur'
    }
    else if(percentage>=50){
        badge='🚀 Budding Innovator'
    }
    else{
        badge='👩‍💼 Future Job Rockstar'
    }


    
    let text='';
    if(percentage>=80){
        text='🚀 Entrepreneur mode: Activated. The world’s not ready for you.'
    }
    else if(percentage>=50){
        text='🌱 You have got the spark! Now all it needs is fuel and action.'
    }
    else{
        text='💼 You prefer stability — and every visionary needs a solid operator.'
    }

const shareText=`🏆Hey, I scored ${percentage}% on the Entrepreneur Mindset Quiz and earned the badge: "${badge}"! 
Check your score now at`

const encodedText=encodeURIComponent(shareText);
const navigate=useNavigate();
const quizLink=encodeURIComponent('https://are-u-enterpenter-xndr.vercel.app/')

const shareLinks={
    whatsapp: `https://wa.me/?text=${encodedText}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedText}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${quizLink}`,
    // facebook: `https://www.facebook.com/sharer/sharer.php?u=${quizLink}`, 
}

const handleShareClick=()=>{
    window.open(shareLinks.twitter,'_blank')
};


const handleClick=()=>{
    
    navigate('/');
}
  return (
    <div className='result'>
      <h1>{badge}</h1>
      <h2>{text}</h2>
      <h2>Entrepreneur mind: {percentage}%</h2>
      <h2>score: {score} out of {total}</h2>

<div style={{ marginTop: '20px' }}>

        <h4>Or share on:</h4>
        <a href={shareLinks.whatsapp} target="_blank" rel="noreferrer">📱 WhatsApp</a> &nbsp;|&nbsp;
        <a href={shareLinks.twitter} target="_blank" rel="noreferrer">🐦 X</a> &nbsp;|&nbsp;
        <a href={shareLinks.linkedin} target="_blank" rel="noreferrer">💼 LinkedIn</a> &nbsp;|&nbsp;
        {/* <a href={shareLinks.facebook} target="_blank" rel="noreferrer">📘 Facebook</a> */}
      </div>


      <button onClick={handleClick}>go to home</button>
      
    </div>
  )
}

export default Result
