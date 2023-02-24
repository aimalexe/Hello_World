const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const hello = `Express is to Node.js as Sinatra is to Ruby: it’s a light-weight web application framework
        that helps you get up and running quickly. Together, they form a powerful duo for building fast,
        scalable, and maintainable web applications.`;
    const world = '- Azat Mardan, author of "Pro Express.js"';
    res.send(hello + "\n\t\t" + world);

});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
