import express from 'npm:express'
import taskRoutes from './routes/tasks.routes.ts'
import check_inRoutes from './routes/check_in.routes.ts'
import './db.ts'

const app = new express()

app.use(express.json());

app.use(taskRoutes);
app.use(check_inRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})