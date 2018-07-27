// import dependencies
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
    
// initialise express
const app = express();
    
// root endpoint
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/pages/index.html'));
});
    
// select the port in which node server will run
const port = 5000;
    
// listen to the selected port and log a message once connection is established
app.listen(port, () => console.log(`Server is running on port ${port}`));