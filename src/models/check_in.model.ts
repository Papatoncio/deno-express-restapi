import { model, Schema } from "npm:mongoose";

const check_inSchema = new Schema({
    IdEmpleado: Number,
    Fecha: String,
    Hora: String,
    Tipo: String
});

export default model("Check_In", check_inSchema);
