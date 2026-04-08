import OpenAI from "openai";
import fs from "fs";
import path from "path";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return Response.json({ reply: "Invalid message." }, { status: 400 });
    }

    if (message.length > 300) {
      return Response.json(
        { reply: "Please keep your question shorter." },
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "data", "aboutMe.json");
    const aboutMe = fs.readFileSync(filePath, "utf8");

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: [
        {
          role: "system",
          content: `
You are a portfolio assistant for Aryan Warke.

Rules:
- Answer only using the provided portfolio information.
- If the answer is not in the data, say: "I don't have that information on the site yet."
- Do not invent facts.
- Do not guess GPA, internships, private details, salary, or anything not explicitly provided.
- Keep answers short, clear, and professional.
- Use 2 to 4 sentences maximum.
          `,
        },
        {
          role: "user",
          content: `
Portfolio information:
${aboutMe}

Visitor question:
${message}
          `,
        },
      ],
    });

    return Response.json({
      reply: response.output_text ?? "Sorry, I couldn't generate a response.",
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return Response.json(
      { reply: "Something went wrong on the server." },
      { status: 500 }
    );
  }
}