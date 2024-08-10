import express from 'express';
// import routes from './routes.js';

const app = express();
export const path = 'C:/Users/Sebastian/Documents/Proyectos/CusroGit/';

app.set('view engine', 'ejs');
app.set('views', `${path}/views`);

app.use(express.static(`${path}/public`));

// Rutas
app.get('/', (req, res) => {
    res.render('index', { titlePage: 'Pagina de inicio' })
});

app.get('/inicio', (req, res) => {
    res.render('index', { titlePage: 'Pagina de inicio' })
});

app.get('/profesores', (req, res) => {
    res.render('profesores', { titlePage: 'Profesores' })
});

// Para rutas no encontradas
app.use((req, res, next) => {
    res.status(404).sendFile(`${path}/public/404.html`)
});

app.listen(3005, console.log('Servidor corriendo http://localhost:3005'));