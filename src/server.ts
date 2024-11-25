// import express from 'express';
// import cors from 'cors';
// import helmet from 'helmet';
// import dotenv from 'dotenv';
// //import { errorHandler } from './middleware/error.middleware';

// // Load environment variables
// dotenv.config();

// const app = express();

// // Middleware
// app.use(helmet());
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Routes
// app.get('/health', (req, res) => {
//   res.status(200).json({ status: 'ok' });
// });

// // Error handling
// //app.use(errorHandler);

// // Start server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });