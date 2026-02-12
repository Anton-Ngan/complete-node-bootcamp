const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

dotenv.config({ path: './.env' });

// console.log(process.env);

async function connectDB() {
  const dbString = await process.env.DB_CONNECT.replace(
    '<PASSWORD>',
    process.env.DB_PW,
  );
  try {
    await mongoose.connect(dbString);
    console.log('DB connection successful!');
  } catch (err) {
    console.log('An error occurred:', err.message);
  }
}
connectDB();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
