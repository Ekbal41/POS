import { prisma } from "~/db.server";


export function getAllDine({ userId }) {
  return prisma.dine.findMany({
    where: { userId },
    orderBy: { updatedAt: "desc" },
  });
}

export function createDine({ items, amount, status, orderType, userId }) {
  return prisma.dine.create({
    data: {
      items, amount, status, orderType,
      orderNo: String(Math.floor(Math.random() * 1000000000)),
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
}

export function deleteDine({ id, userId }) {
  return prisma.dine.deleteMany({
    where: { id, userId },
  });
}

export function updateDineStatus({ id, status, userId }) {
  return prisma.dine.updateMany({
    where: { id, userId },
    data: { status },
  });
}
