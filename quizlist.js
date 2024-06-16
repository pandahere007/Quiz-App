import React, { useState, useEffect } from 'react';
import QuizCard from './QuizCard'; 
import api from '../services/api'; 

function QuizList() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    api.getQuizzes()
      .then(data => setQuizzes(data))
      .catch(error => console.error('Error fetching quizzes:', error));
  }, []);

  return (
    <div className="container">
      <h1 className="display-5 fw-bold text-center my-4">Quizzes</h1>
      <div className="row">
        {quizzes.map(quiz => (
          <div key={quiz._id} className="col-lg-4">
            <QuizCard quiz={quiz} /> 
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuizList;