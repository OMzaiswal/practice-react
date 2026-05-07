import { useState } from "react";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleTask = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  const deleteTask = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <h1>Todo App</h1>

      <div style={styles.inputBox}>
        <input
          type="text"
          placeholder="Enter a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={styles.input}
        />
        <button onClick={addTask} style={styles.addBtn}>
          Add Button
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.item}>
            <span
              onClick={() => toggleTask(index)}
              style={{
                ...styles.text,
                textDecoration: todo.done ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => deleteTask(index)} style={styles.deleteBtn}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "60px",
    fontFamily: "sans-serif",
  },
  inputBox: {
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    width: "220px",
    marginRight: "10px",
  },
  addBtn: {
    padding: "10px 15px",
    cursor: "pointer",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    width: "300px",
    margin: "10px auto",
    padding: "10px",
    border: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-between",
    borderRadius: "6px",
  },
  text: {
    cursor: "pointer",
  },
  deleteBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
};
