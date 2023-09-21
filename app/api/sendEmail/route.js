import { sendMail } from "@/app/lib/mailService";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { method } = req;
    const { name, email, textMessage, acceptedTerms } = await req.json();

    if (!name || !email || !textMessage) {
      return NextResponse.json({ msg: ["Wypełnij wszystkie wymagane pola"], success: false }, { status: 422 });
    }

    if (!acceptedTerms) {
      return NextResponse.json({ msg: ["Zaakceptuj regulamin"], success: false }, { status: 422 });
    }

    switch (method) {
      case "POST": {
        await sendMail({
          subject: 'Zapytanie dotyczące usług',
          name: name,
          personEmail: email,
          textMessage: textMessage,
        });
        return NextResponse.json({ msg: ["Wiadomość wysłana - oczekuj na odpowiedź!"], success: true }, { status: 200 });
      }
      // case "GET": {
      //   //Do some thing
      //   res.status(200).send(req.auth_data);
      //   break;
      // }
      default:
        res.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
        return NextResponse.json({ msg: [`Method ${method} Not Allowed`], success: false }, { status: 405 });
    }


  } catch (err) {
    return NextResponse.json({ msg: [err.message], success: false }, { status: 400 });
  }
};
