import React, { useState } from 'react';
import axios from 'axios';

function LessonPlanForm({ setLessonPlan }) {
  const [topic, setTopic] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/generate-lesson-plan', { topic });
      setLessonPlan(response.data);
    } catch (error) {
      console.error("Error generating lesson plan", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
        placeholder="Enter teaching topic"
        required
      />
      <button type="submit">Generate Lesson Plan</button>
    </form>
  );
}

export default LessonPlanForm;