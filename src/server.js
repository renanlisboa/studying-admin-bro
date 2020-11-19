require('dotenv').config();
const express = require('express');
const { default: AdminBro } = require('admin-bro');
const options = require('./admin/admin.options');
const buildAdminRouter = require('./admin/admin.router');
const mongoose = require('mongoose');

const app = express();
const port = 3333;

const run = async () => {
  await mongoose.connect(process.env.CONNECTIONSTRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
  });

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);
  app.listen(port, () => console.log(
    `AdminBro is running on http://localhost:${port}/admin`
  ));
}

module.exports = run;


// mongoose.connect(process.env.CONNECTIONSTRING, { 
//   useNewUrlParser: true, 
//   useUnifiedTopology: true, 
//   useFindAndModify: false })
//   .then(() => {
//     app.emit('connected');
//   })
//   .catch(err => console.log(err));

// app.on('connected', () => {
//   app.listen(port, () => {
//     console.log(`AdminBro is running on http://localhost:${port}/admin`);
//   })
// });

