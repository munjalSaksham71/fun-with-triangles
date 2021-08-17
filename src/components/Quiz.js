import React, { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const questions = [
    {
      questionText: "Which one is an acute angle? ",
      answerOptions: [
        { answerText: "60", isCorrect: true },
        { answerText: "90", isCorrect: false },
        { answerText: "115", isCorrect: false },
        { answerText: "136", isCorrect: false },
      ],
    },
    {
      questionText: "Which make a triangle?",
      answerOptions: [
        { answerText: "A = 30°, B = 60°, C = 90°   ", isCorrect: true },
        { answerText: "A = 30°, B = 16°, C = 40°  ", isCorrect: false },
        { answerText: "A = 10°, B = 90°, C = 90°  ", isCorrect: false },
        { answerText: "A = 5°, B = 30°, C = 100°  ", isCorrect: false },
      ],
    },
    {
      questionText: "An angle whose measure is exactly 90 degrees.",
      answerOptions: [
        { answerText: "Acute", isCorrect: false },
        { answerText: "Obtuse", isCorrect: false },
        { answerText: "Right", isCorrect: true },
        { answerText: "Straight", isCorrect: false },
      ],
    },
    {
      questionText: "In Which Traingle All Sides Are Equal?",
      answerOptions: [
        { answerText: "Isosceles", isCorrect: false },
        { answerText: "Right", isCorrect: false },
        { answerText: "Equilateral", isCorrect: true },
        { answerText: "Scalene", isCorrect: false },
      ],
    },
    {
      questionText: "In Which Traingle Two Of Sides Are Equal?",
      answerOptions: [
        { answerText: "Right", isCorrect: false },
        { answerText: "Scalene", isCorrect: false },
        { answerText: "Isosceles", isCorrect: true },
        { answerText: "Equilateral", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h2>
            You scored {score} out of {questions.length}{" "}
          </h2>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz;
