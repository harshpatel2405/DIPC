//Learnt about Express JS , its use , its features, its merits and demerits 

Its working and its usage ...

1. Middleware and Routing: Middleware are functions that run when you receive a request, and routing is setting     paths for requests (like /home, /user).
    <!-- app.get('/home', (req, res) => {
  res.send('Welcome to Home Page');
    }); -->

2. Simple Design: Express is easy to set up, allowing you to quickly create a server and handle requests.
<!-- 
const express = require('express');
const app = express();
app.listen(3000, () => console.log('Server running')); -->

3. Flexible Structure: You can organize your code however you want. You aren’t forced to follow strict rules.

<!-- Example: You can put routes in one file or split them across many files. -->

4. Templating: Use engines like EJS to create dynamic web pages.

<!-- app.set('view engine', 'ejs');
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Us' });
}); -->

5. Serving Files: You can serve images, CSS, or JS files easily.


<!-- app.use(express.static('public')); -->

6. Node.js Integration: Express works well with Node.js features like handling multiple requests at the same time.
