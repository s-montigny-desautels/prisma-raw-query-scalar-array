const { Prisma, PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const valuesWithInt = [1, 2.2, 3.3];
const valuesWithNull = [null, 2.2, 3.3];

(async () => {
  await prisma.$executeRaw`
  	INSERT INTO "Test" (values) VALUES (${valuesWithNull})
  `;
})();
