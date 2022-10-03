import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const { name, email, message, phone, subject, messageFrom } = req.body;
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    // secure: process.env.NODE_ENV === "production",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const mailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: "New message from sanabel website",
    html: `<div>
    <h1>Message from contact ${messageFrom}</h1>
    <h3>Message from ${name}</h3>
    <p>Subject: ${subject}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    </div>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({
      en: "Message sent successfully",
      ar: "تم ارسال الرسالة بنجاح",
    });
  } catch (error) {
    res.status(500).json({
      error: {
        en: "Error sending message",
        ar: "خطأ في ارسال الرسالة",
        error,
      },
    });
  }
}
