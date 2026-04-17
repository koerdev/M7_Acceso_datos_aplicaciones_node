import express from 'express'
import exphbs from 'express-handlebars'
import productRouter from './routes/productRoutes.js'
import path from 'path'

const __dirname = path.resolve()

const app = express()

const PORT = process.env.PORT || 3005

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Static public
app.use(express.static(path.join(__dirname, 'src/public')))

// Sincronización de la BD

// Configuración de HBS
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'src/views'))

app.engine('hbs', exphbs.engine({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, 'src/views/layouts'),
  extname: '.hbs'
}))

// Rutas
app.use('/', productRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})