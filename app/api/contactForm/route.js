import connectDB from "@/lib/mongodb.js";
import { NextResponse } from "next/server";
import ContactForm from "@/models/contactForm.js"
import mongoose from "mongoose";


export async function POST(req) {
  const { name, email, message } = await req.json()

  try {
    await connectDB()
    await ContactForm.create({ name, email, message })

    return NextResponse.json({
      msg: ["Wiadomość wysłana. Odpowiemy najszybciej jak to możliwe."],
      success: true
    })
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Niestey, coś poszło nie tak."] });
    }
  }
}