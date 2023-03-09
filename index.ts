import express from 'express';
import EmployeeRouter from './src/routers/employee.router';
import database from './src/configs/database';

const PORT = 3000;
const app = express();
database.connect();

app.set('view engine', 'ejs');
app.set('views', './src/views');
// app.use(express.static('public'));

app.use('/employee', EmployeeRouter);

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:3000/employee/add ');
})

//npm run start:dev