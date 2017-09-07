/*
 *  Imports list:
 *  Express -> web framework for Node.js
 *  Cors -> Security
 *  Helmet -> Security
 *  Server file is written using ES 2015
 */
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(cors());
app.use(helmet());
// Express will serve the index.html file in the dist/ folder
app.use(express.static(__dirname + '/dist'));
// Express will also serve wingcss css file for styling purposes
app.use('/scripts', express.static(__dirname + '/node_modules/wingcss/dist'));

app.listen(1337, () => { console.log('[+] Server running on 1337'); });
