import express from 'express';
import helloWorldRouter from './routes/helloWorldRouter';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/api/v1',helloWorldRouter)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
