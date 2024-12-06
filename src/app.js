import express from 'express';
import cors from 'cors';
import bookRoutes from './routes/books.js';
import path from 'path';
import { fileURLToPath } from 'url';

// ESModules에서 __dirname 구현
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// 정적 파일 경로 설정
app.use('/images', express.static(path.join(__dirname, 'images')));

// 라우트 설정
app.use('/books', bookRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}에서 서버가 운영중입니다!`);
});
