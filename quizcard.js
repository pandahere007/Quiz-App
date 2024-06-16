import React from 'react';
import { Link } from 'react-router-dom';

function QuizCard({ quiz }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{quiz.title}</h5>
        <p className="card-text">{quiz.description}</p>
        <Link to={`/quiz/${quiz._id}`} className="btn btn-primary">Start Quiz</Link>
      </div>
    </div>
  );
}

export default QuizCard;