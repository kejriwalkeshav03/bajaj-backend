const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestAlphabet = alphabets.length > 0 ? [alphabets.reduce((a, b) => a.localeCompare(b, undefined, {sensitivity: 'base'}) > 0 ? a : b)] : [];
  
    res.json({
      is_success: true,
      user_id: "keshav kejriwal",
      email: "keshav.kejriwal2021@vitstudent.ac.in",
      roll_number: "21BCE1001",
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet
    });
  });

  
  app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
  });

  
  