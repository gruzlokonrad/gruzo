import connectDB from "@/lib/mongodb.js";
import { NextResponse } from "next/server";
import NewsletterForm from "@/models/newsletterForm.js"
import mongoose from "mongoose";


export async function POST(req) {
  const { email } = await req.json()

  try {
    await connectDB()
    await NewsletterForm.create({ email })

    return NextResponse.json({
      msg: ["Sukces! Więcej informacji otrzymasz na wskazany adres e-mail."],
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