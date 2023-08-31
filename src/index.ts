import express from 'express';
import routes from './routes/routes';
import path from 'path';

const app = express();
const port = 3000;

// middleware
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes); 
app.use('/image-info', routes);

// This is the route handler for the default home page
app.get('/image', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'encenadaport.jpg'));
})

// starting Express server 
// app.listen(port, () => {
//   console.log(`server started at http://localhost:${port}`);
  
// });
// const PORT = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  
});

export default app; 