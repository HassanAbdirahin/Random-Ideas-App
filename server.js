const express = require('express');
const port = 5000;

const app = express();

const ideas = [
    {
      id: 1,
      text: "Create a new app for productivity",
      tag: "Technology",
      username: "user123",
      date: "2024-02-15",
    },
    {
      id: 2,
      text: "Write a book about travel experiences",
      tag: "Literature",
      username: "writer456",
      date: "2024-02-16",
    },
    {
      id: 3,
      text: "Start a fitness challenge",
      tag: "Health",
      username: "fitnessexplorer",
      date: "2024-02-17",
    },
  ];

app.get('/', (req, res) => {
    res.send({message: 'Welcome to the random ideas API'});
})

// Get all ideas
app.get('/api/ideas', (req, res) => {
    res.send({success: true, data: ideas});
})

// Get single ideas
app.get('/api/ideas/:id', (req, res) => {

    const idea = ideas.find((idea) => idea.id === +req.params.id);

    if (!idea) {
        return res.status(404).json({success: false, error: 'recourse not found'});

    }

    res.send({success: true, data: idea});
})

app.listen(port, () => console.log(`Server listening on port ${port}`))