import mongoose from 'npm:mongoose';

const dbURL = "mongodb://localhost:27017";
const atlas = 'mongodb+srv://pancho:linux@gymcapyfit.cs4cmgr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(atlas).then(() => {
  console.log("Conected");
}).catch((err) => {
  console.log("Conection Failed", err);
})