"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function client() {
  // ... you will write your Prisma Client queries here
  return prisma.day.create({ data: { date: 2 } });
}

// client()
//   .then(async (data) => {
//     console.log(data);
//   })
//   .catch(async (e) => {
//     console.error(e);
//
//     process.exit(1);
//   })
//   .finally(async () => await prisma.$disconnect());
