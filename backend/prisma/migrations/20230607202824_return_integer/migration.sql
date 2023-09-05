/*
  Warnings:

  - You are about to alter the column `cep` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `cpf` on the `User` table. The data in that column could be lost. The data in that column will be cast from `String` to `BigInt`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" BIGINT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "nascimento" TEXT NOT NULL,
    "cep" INTEGER NOT NULL,
    "andress" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "nHouse" TEXT,
    "complemento" TEXT,
    "senha" TEXT NOT NULL
);
INSERT INTO "new_User" ("andress", "bairro", "cep", "city", "complemento", "cpf", "email", "gender", "id", "nHouse", "name", "nascimento", "senha", "state") SELECT "andress", "bairro", "cep", "city", "complemento", "cpf", "email", "gender", "id", "nHouse", "name", "nascimento", "senha", "state" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
