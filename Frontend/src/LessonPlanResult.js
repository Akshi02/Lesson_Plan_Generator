import React from 'react';

function LessonPlanResult({ lessonPlan }) {
  return (
    <div>
      <h2>Lesson Plan</h2>
      <h3>Learning Objectives</h3>
      <p>{lessonPlan.learningObjectives}</p>
      <h3>Materials Needed</h3>
      <p>{lessonPlan.materialsNeeded}</p>
      <h3>Lesson Procedure</h3>
      <p>{lessonPlan.lessonProcedure}</p>
      <h3>Assessment</h3>
      <p>{lessonPlan.assessment}</p>
      <h3>Differentiation</h3>
      <p>{lessonPlan.differentiation}</p>
    </div>
  );
}

export default LessonPlanResult;