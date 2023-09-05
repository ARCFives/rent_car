/*
  Warnings:

  - Added the required column `nascimento` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "CEP" INTEGER NOT NULL,
    "andress" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "nHouse" INTEGER,
    "complemento" TEXT,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_User" ("CEP", "andress", "bairro", "city", "complemento", "cpf", "email", "gender", "id", "nHouse", "name", "senha", "state") SELECT "CEP", "andress", "bairro", "city", "complemento", "cpf", "email", "gender", "id", "nHouse", "name", "senha", "state" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
