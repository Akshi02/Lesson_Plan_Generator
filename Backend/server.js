const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/generate-lesson-plan', async (req, res) => {
  const { topic } = req.body;
  
  try {
    const response = await axios.post('https://api.openai.com/v1/completions', {
      prompt: `Create a detailed lesson plan for the topic "${topic}" with the following subheadings:\n\nLearning Objectives\nMaterials Needed\nLesson Procedure\nAssessment\nDifferentiation`,
      max_tokens: 500,
      temperature: 0.7
    }, {
      headers: {
        'Authorization': `Bearer YOUR_OPENAI_API_KEY`
      }
    });
    
    const lessonPlanText = response.data.choices[0].text;
    const lessonPlan = parseLessonPlan(lessonPlanText);
    
    res.json(lessonPlan);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error generating lesson plan');
  }
});

function parseLessonPlan(text) {
  const sections = text.split('\n\n');
  const lessonPlan = {
    learningObjectives: '',
    materialsNeeded: '',
    lessonProcedure: '',
    assessment: '',
    differentiation: ''
  };
  
  sections.forEach(section => {
    const [heading, ...content] = section.split('\n');
    if (heading.includes('Learning Objectives')) lessonPlan.learningObjectives = content.join(' ');
    if (heading.includes('Materials Needed')) lessonPlan.materialsNeeded = content.join(' ');
    if (heading.includes('Lesson Procedure')) lessonPlan.lessonProcedure = content.join(' ');
    if (heading.includes('Assessment')) lessonPlan.assessment = content.join(' ');
    if (heading.includes('Differentiation')) lessonPlan.differentiation = content.join(' ');
  });
  
  return lessonPlan;
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});