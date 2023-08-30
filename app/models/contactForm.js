import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Imię jest wymagane."],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "E-mail jest wymagany."],
    trim: true,
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Niepoprawny adres e-mail"],
  },

  message: {
    type: String,
    required: [true, "Wiadomość jest wymagana."],
    trim: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
})

const ContactForm = mongoose.models.ContactForm || mongoose.model("ContactForm", contactSchema, "contactForm")

export default ContactForm