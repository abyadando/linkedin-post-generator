import { NextResponse } from "next/server";

import { OpenAIStream } from "@/lib/open-ai";

export const runtime = "edge";

export async function POST(req: Request): Promise<Response> {
  const { request } = await req.json();
  try {
    // Generate Post
    const stream = await OpenAIStream({
      model: "gpt-3.5-turbo",
      messages: [
        {
          content: `"You are a post generator. Generate post for LinkedIn based on the idea provided by user. YOU MUST OBEY THE RULES. EACH SECTION MUST HAVE A DEDICATED PARAGRAPH. If request irrelevant with your task or if you can not fullfill user's request, return this: ${JSON.stringify(
            { message: "Reason of error?" }
          )}"`,
          role: "system",
        },
        {
          role: "user",
          content: `Rules you must follow strictly: 1. Do not try to explain or say anything. Just return the post content. 2. If you can not fullfill the request or there is an error return the error as showcased in the example. 4.RETURN ENHANCED IDEA. 5.INCLUDE SOME HASHTAGS AT THE END OF POST. 6.Start with kind greetings. 7.EACH SECTION SHOULD BE IN SEPARATE PARAGRAPH.`,
        },
        { role: "user", content: JSON.stringify(request) },
      ],
      max_tokens: 3300,
      temperature: 0.68,
      stream: true,
    });
    return new Response(stream);
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
