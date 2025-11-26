// Use "type: module" in package.json to use ES modules
import express from "express";
import cors from "cors";
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173", // Vite Dev
      "https://react-express-frontend-tan.vercel.app", // Deployed Vite
    ],
  })
);

// Define your routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

app.get("users", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        name: "John Doe",
        age: 30,
      },
      {
        id: 2,
        name: "Jane Doe",
        age: 25,
      },
    ],
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

// Export the Express app
export default app;
