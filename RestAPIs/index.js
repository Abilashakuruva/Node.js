const express = require('express');
const app = express();

// Parse JSON bodies
app.use(express.json());

// In-memory todo list
let todos = [];
let nextId = 1; // Auto-incrementing ID

// === CREATE: POST /todos ===
app.post('/todos', (req, res) => {
  const { title, completed = false } = req.body;
  if (!title) return res.status(400).json({ error: 'Title is required' });

  const newTodo = { id: nextId++, title, completed };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// === READ: GET /todos ===
app.get('/todos', (req, res) => {
  res.json(todos);
});

// === READ: GET /todos/:id ===
app.get('/todos/:id', (req, res) => {
  const todo = todos.find(t => t.id === parseInt(req.params.id));
  if (!todo) return res.status(404).json({ error: 'Not found' });
  res.json(todo);
});

// === UPDATE: PUT /todos/:id ===
app.put('/todos/:id', (req, res) => {
  const { title, completed } = req.body;
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).json({ error: 'Not found' });

  // Update fields
  if (title !== undefined) todos[todoIndex].title = title;
  if (completed !== undefined) todos[todoIndex].completed = completed;

  res.json(todos[todoIndex]);
});

// === DELETE: DELETE /todos/:id ===
app.delete('/todos/:id', (req, res) => {
  const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
  if (todoIndex === -1) return res.status(404).json({ error: 'Not found' });

  const deleted = todos.splice(todoIndex, 1)[0];
  res.json({ message: 'Deleted', todo: deleted });
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});

app.use('/',(req,res)=>{
    res.send("<h1>Welcome to RestAPIs")
})