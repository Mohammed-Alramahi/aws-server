const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
app.use(express.static('./public'));
app.get('/data', (req, res) => {
    res.json({ test: 1, test2: 2 });
})
app.listen(port, () => console.log("listening"));