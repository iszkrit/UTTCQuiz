import React from 'react';
import QuizFrame from './QuizFrame';
import Quiz from './Quiz';
import './App.css';

type QuizProps = {
  point: number, 
  text: string, 
  answer: string,
  isAlreadySelected: boolean,
}

type QuizType = {
  [key: string]: {
    [key: string]: QuizProps;
  };
};

type Props = {
  id: number,
  field: string, 
  point: number, 
  text: string, 
  answer: string,
  isAlreadySelected: boolean,
  updatedQuiz: (field: string, id: number) => void,
}

function App() {
  const [quiz, setQuiz] = React.useState<QuizType>(Quiz)

  const updatedQuiz = (field:string, id:number) => {
    const newQuiz = { ...quiz };
    newQuiz[field][id].isAlreadySelected = true;
    setQuiz(newQuiz);
  }

  const quizInfo = (field:string, id:number):Props => {
    const {point, text, answer, isAlreadySelected} = quiz[field][id]
    return {
      id: id, 
      point: point,
      field: field,
      text: text,
      answer: answer,
      isAlreadySelected: isAlreadySelected,
      updatedQuiz: updatedQuiz
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        第1回オフ会 UTTC Quiz
      </header>
      <div className="App-body">
        <div className="QuizList">
          <QuizFrame {...quizInfo("html", 0)}/>
          <QuizFrame {...quizInfo("html", 1)}/>
          <QuizFrame {...quizInfo("html", 2)}/>
          <QuizFrame {...quizInfo("html", 3)}/>
          <QuizFrame {...quizInfo("html", 4)}/>
        </div>
        <div className="QuizList">
          <QuizFrame {...quizInfo("css", 0)}/>
          <QuizFrame {...quizInfo("css", 1)}/>
          <QuizFrame {...quizInfo("css", 2)}/>
          <QuizFrame {...quizInfo("css", 3)}/>
          <QuizFrame {...quizInfo("css", 4)}/>
        </div>
        <div className="QuizList">
          <QuizFrame {...quizInfo("js", 0)}/>
          <QuizFrame {...quizInfo("js", 1)}/>
          <QuizFrame {...quizInfo("js", 2)}/>
          <QuizFrame {...quizInfo("js", 3)}/>
          <QuizFrame {...quizInfo("js", 4)}/>
        </div>
        <div className="QuizList">
          <QuizFrame {...quizInfo("uttc", 0)}/>
          <QuizFrame {...quizInfo("uttc", 1)}/>
          <QuizFrame {...quizInfo("uttc", 2)}/>
          <QuizFrame {...quizInfo("uttc", 3)}/>
          <QuizFrame {...quizInfo("uttc", 4)}/>
        </div>
      </div>
    </div>
  );
}

export default App;
