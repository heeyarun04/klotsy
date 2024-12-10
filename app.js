const express = require ("express")
const app = express()

const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Middleware untuk file statis (CSS, gambar)
app.use(express.static(path.join(__dirname, 'public')));

// Set EJS sebagai template engine
app.set('view engine', 'ejs');

// Route untuk landing page
app.get('/', (req, res) => {
    res.render('index', { title: 'Welcome to Our Landing Page' });
});


app.listen(port, () => {
    console.log(`running on port ${port}`)
})