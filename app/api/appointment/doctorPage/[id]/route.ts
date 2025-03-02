import prisma from "@/lib/db";
import { NextRequest } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const docAppointments = await prisma.offlineMeet.findMany({
      where: {
        doctorId: id,
      }
    });
    return new Response(JSON.stringify({ success: true, data: { docAppointments } }));
  } catch (error) {
    return new Response(JSON.stringify({ success: false }));
  }
}