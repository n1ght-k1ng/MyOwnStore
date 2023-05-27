const connectDatabase = async () => {
  try{
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
} catch (error) {
  console.log(error, "tytyt");
  process.exit(1);
}}