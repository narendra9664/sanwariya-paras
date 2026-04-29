import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    const lastMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";

    let responseText =
      "Hello! I am the Sanwariya Paras AI Assistant. How can I help you today? You can ask about our doctors, services, or how to book an appointment.";

    if (lastMessage.includes("appointment") || lastMessage.includes("book")) {
      responseText =
        "You can easily book an appointment by clicking the 'Book Appointment' button at the top right of our website. Alternatively, you can call us directly on our 24/7 helpline.";
    } else if (lastMessage.includes("doctor") || lastMessage.includes("specialist")) {
      responseText =
        "We have a team of highly experienced specialists across various departments including Cardiology, Neurology, Orthopedics, and more. You can view our full team in the 'Doctors' section.";
    } else if (lastMessage.includes("emergency") || lastMessage.includes("urgent")) {
      responseText =
        "For medical emergencies, please call our 24/7 Emergency Helpline immediately. We have a fully equipped ER ready to assist you round the clock.";
    } else if (lastMessage.includes("time") || lastMessage.includes("hour")) {
      responseText =
        "Our hospital is open 24/7 for emergencies. Regular OPD timings are generally from 9:00 AM to 6:00 PM, Monday to Saturday. Specific doctor timings may vary.";
    } else if (messages.length > 1) {
      responseText =
        "Thank you for reaching out. Please contact our front desk for more detailed information regarding your query, or try asking something else.";
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    return NextResponse.json({ reply: responseText });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
