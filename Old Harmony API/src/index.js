import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import produtoController from './controller/produtoController.js';

const servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(produtoController);

servidor.use('/storage', express.static('./storage'));

const port = 5000;
servidor.listen(port, () => console.log(`API subiu na porta ${port}`));