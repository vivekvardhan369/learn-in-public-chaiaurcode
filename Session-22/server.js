// const http = require('http');

// const express = require

// const app = express()

// app.get('/',(req,res)=>res.end('Homepage'));
// app.get('/about-us',(req,res)=> res.end('about us Page'));
// app.get('/contact-us',(req,res)=>res.end('contact us page'))

// // const server = http.createServer(app);

// app.listen(8000,function(){
//     console.log('Server is running on port 8000')
// ;
    
// })


// http module
// can you create a basic express server using http module?
// GET and POST methods
// req.method and req.url (node) | Magical Layer

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Homepage');
        } else if (req.url === '/about-us') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('About Us Page');
        } else if (req.url === '/contact-us') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Contact Us Page');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
        }
    } else if (req.method === 'POST') {
        if (req.url === '/register') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                console.log('User data received:', body);
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end('User registered successfully');
            });
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Page Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(8000, () => {
    console.log('Server is running on port 8000');
});