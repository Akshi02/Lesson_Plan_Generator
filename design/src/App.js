import logo from './logo.svg';
import './App.css';
import React from 'react';
import LessonPlanForm from './LessonPlanForm';
import LessonPlanResult from './LessonPlanResult';

function App() {
  const [lessonPlan, setLessonPlan] = React.useState(null);

  return (
    <div className="App">
      <h1>Lesson Plan Generator</h1>
      <LessonPlanForm setLessonPlan={setLessonPlan} />
      {lessonPlan && <LessonPlanResult lessonPlan={lessonPlan} />}
    </div>
  );
}

export default App;