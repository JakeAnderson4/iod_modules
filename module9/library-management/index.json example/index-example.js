const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let items = [
  { id: 1, name: "Item 1", description: "This is item 1" },
  { id: 2, name: "Item 2", description: "This is item 2" },
];

// Get all items
app.get("/api/items", (req, res) => {
  res.json(items);
});

// Get a single item by ID
app.get("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const item = items.find((i) => i.id === id);
  if (!item) {
    return res.status(404).json({ message: "Item not found" });
  }
  res.json(item);
});

// Add a new item
app.post("/api/items", (req, res) => {
  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };
  items.push(newItem);
  res.json(newItem);
});

// Update an item
app.put("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex((i) => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  items[itemIndex] = {
    ...items[itemIndex],
    name: req.body.name,
    description: req.body.description,
  };
  res.json(items[itemIndex]);
});

// Delete an item
app.delete("/api/items/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const itemIndex = items.findIndex((i) => i.id === id);
  if (itemIndex === -1) {
    return res.status(404).json({ message: "Item not found" });
  }
  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
