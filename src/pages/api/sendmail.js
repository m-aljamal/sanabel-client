import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const {
    name,
    email,
    message,
    phone,
    subject,
    messageFrom,
    donateAmount,
    fullName,
    country,
    city,
    donateForProject,
    notes,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.HOST,
    port: 587,
    // secure: process.env.NODE_ENV === "production",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
  const contactMailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: "New message from sanabel website",
    html: `<div>
    <h1>Message from ${messageFrom}</h1>
    <h3>Message from ${name}</h3>
    <p>Subject: ${subject}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Message: ${message}</p>
    </div>`,
  };
  const donateMailOptions = {
    from: email,
    to: process.env.EMAIL_TO,
    subject: "New message from sanabel website",
    html: `<div>
    <h1>Message from ${messageFrom}</h1>
    <h3>Message from ${fullName}</h3>
    <p>Donate Amount: ${donateAmount}</p>
    <p>Country: ${country}</p>
    <p>City: ${city}</p>
    <p>Phone: ${phone}</p>
    <p>Email: ${email}</p>
    <p>Donate For Project: ${donateForProject}</p>
    <p>Notes: ${notes}</p>
    </div>`,
  };
  const mailOptions =
    messageFrom === "contact form" ? contactMailOptions : donateMailOptions;
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
