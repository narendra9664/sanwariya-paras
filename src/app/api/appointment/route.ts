import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { department, doctor, date, time, patientName, patientPhone, patientReason } = data;

    // Validate required fields
    if (!patientName || !patientPhone) {
      return NextResponse.json(
        { error: "Name and Phone are required" },
        { status: 400 }
      );
    }

    // Nodemailer configuration
    // The user needs to add EMAIL_USER and EMAIL_PASS to their .env.local file
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER || "chittorgarhvlog00@gmail.com",
        pass: process.env.EMAIL_PASS, // This must be an App Password, not the regular Gmail password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || "chittorgarhvlog00@gmail.com",
      to: "chittorgarhvlog00@gmail.com",
      subject: `New Appointment Booking - ${patientName}`,
      html: `
        <h2>New Appointment Request</h2>
        <p>A new appointment has been requested from the website.</p>
        <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%; max-width: 600px;">
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold; width: 30%;">Patient Name</td>
            <td>${patientName}</td>
          </tr>
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold;">Phone Number</td>
            <td>${patientPhone}</td>
          </tr>
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold;">Department</td>
            <td>${department || "Not specified"}</td>
          </tr>
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold;">Doctor</td>
            <td>${doctor || "Not specified"}</td>
          </tr>
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold;">Date</td>
            <td>${date || "Not specified"}</td>
          </tr>
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold;">Time</td>
            <td>${time || "Not specified"}</td>
          </tr>
          <tr>
            <td style="background-color: #f3f4f6; font-weight: bold;">Reason for Visit</td>
            <td>${patientReason || "None provided"}</td>
          </tr>
        </table>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Ensure EMAIL_USER and EMAIL_PASS are set correctly in your environment variables." },
      { status: 500 }
    );
  }
}
