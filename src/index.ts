import express from 'express';
import routes from './routes/routes';

const app = express();
// const port = 3000;

app.use(express.json());
app.use('/api', routes); 

// This is the route handler for the default home page
app.get('/image', (req, res) => {
  res.send('this is where your image will be');
})

// starting Express server 
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
  
// });
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  
});