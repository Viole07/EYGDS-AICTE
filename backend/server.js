const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const bcrypt = require('bcryptjs'); // ✅ Fix here

const app = express(); // ✅ Fix: Initialize app first
app.use(express.json()); // ✅ Fix: Move this below app initialization

const PORT = 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB")) // ✅ Fix here: use arrow function inside .then()
    .catch((err) => console.log(err));

// Home Page API
app.get('/', (req, res) => {
    res.send("<h1>Welcome to the MERN stack week 2 session</h1>"); // ✅ Fix here
});

// Register User API
app.post('/register', async (req, res) => {
    const { username, email, password } = req.body; // ✅ Fix: `name` -> `username`
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.json({ message: "User Registered" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" }); // ✅ Send error response
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: "Invalid Credentials" });
        }
        res.json({ message: "User logged in" });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});



// Start Server
app.listen(PORT, (err) => {
    if (err) {
        console.log(err);
    }
    console.log(`Server is running on port ${PORT}`);
});
