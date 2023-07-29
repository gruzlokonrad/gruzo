import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: [true, "E-mail jest wymagany."],
    trim: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Niepoprawny adres e-mail"],
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema)

export default Contact