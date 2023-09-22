import mongoose, { Schema } from "mongoose";

const newsletterFormSchema = new Schema({
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

const NewsletterForm = mongoose.models.NewsletterForm || mongoose.model("NewsletterForm", newsletterFormSchema, "newsletterForm")
export default NewsletterForm