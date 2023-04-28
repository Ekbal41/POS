/*
  Warnings:

  - Added the required column `orderNo` to the `Dine` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Dine" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "items" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "status" BOOLEAN NOT NULL,
    "orderType" TEXT NOT NULL,
    "orderNo" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "Dine_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Dine" ("amount", "createdAt", "id", "items", "orderType", "status", "updatedAt", "userId") SELECT "amount", "createdAt", "id", "items", "orderType", "status", "updatedAt", "userId" FROM "Dine";
DROP TABLE "Dine";
ALTER TABLE "new_Dine" RENAME TO "Dine";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
