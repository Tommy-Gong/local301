const app = require('./server'); // or whatever your main server file is named
const port = 3000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
