const http = require('http');

const express = require

const app = express()

app.get('/',(req,res)=>res.end('Homepage'));
app.get('/about-us',(req,res)=> res.end('about us Page'));
app.get('/contact-us',(req,res)=>res.end('contact us page'))

// const server = http.createServer(app);

app.listen(8000,function(){
    console.log('Server is running on port 8000')
;
    
})

// Import the http module

// Create a basic express server using http module
const server = http.createServer(app);

// Handle GET and POST methods
app.use((req, res, next) => {
    if (req.method === 'GET') {
        console.log('Handling GET request for:', req.url);
    } else if (req.method === 'POST') {
        console.log('Handling POST request for:', req.url);
    }
    next();
});

// Users will access routes externally, and internally the server will handle registration
app.post('/register', (req, res) => {
    res.end('User registered successfully');
});

// req.method and req.url (node) | Magical Layer
server.listen(8000, () => {
    console.log('Server is running on port 8000');
});