/*
  Warnings:

  - You are about to alter the column `cpf` on the `User` table. The data in that column could be lost. The data in that column will be cast from `Int` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" BIGINT NOT NULL,
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
INSERT INTO "new_User" ("CEP", "andress", "bairro", "city", "complemento", "cpf", "email", "gender", "id", "nHouse", "name", "nascimento", "senha", "state") SELECT "CEP", "andress", "bairro", "city", "complemento", "cpf", "email", "gender", "id", "nHouse", "name", "nascimento", "senha", "state" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
