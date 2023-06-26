import express, { response } from 'express';
import path, { dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (request, response) => {
      response.sendFile(path.join(__dirname, 'public/html/home.html'), 'utf8');
})

const PORT = process.env.PORT || 1707;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});