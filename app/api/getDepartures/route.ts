import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const res = await fetch('http://localhost:3001/api/getLDB/Departures/Board?CRS=' + body.crs)
  const services = await res.json();
  return new NextResponse(JSON.stringify(services))
}