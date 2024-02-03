const express = require('express');

const main = async () => {
    const app = express();
    const port = 3000;
    app.get('/', (req, res) => {
        res.send('Hello to my server. This request is coming from my living room server.');
    })

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

main();
