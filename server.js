const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on post ${PORT}... `));
