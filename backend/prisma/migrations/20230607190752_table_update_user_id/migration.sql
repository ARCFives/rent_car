/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
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
CREATE TABLE "new_Reserva" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "retirada" TEXT NOT NULL,
    "dataRetirada" TEXT NOT NULL,
    "horaRetirada" INTEGER NOT NULL,
    "entrega" TEXT NOT NULL,
    "dataEntrega" TEXT NOT NULL,
    "horaEntrega" INTEGER NOT NULL,
    "valorReserva" INTEGER NOT NULL,
    "codigoReserva" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    "carName" TEXT NOT NULL,
    "agenciaRetirada" TEXT NOT NULL,
    "agenciaSaida" TEXT NOT NULL,
    CONSTRAINT "Reserva_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserva" ("agenciaRetirada", "agenciaSaida", "carName", "codigoReserva", "dataEntrega", "dataRetirada", "entrega", "horaEntrega", "horaRetirada", "id", "retirada", "userID", "valorReserva") SELECT "agenciaRetirada", "agenciaSaida", "carName", "codigoReserva", "dataEntrega", "dataRetirada", "entrega", "horaEntrega", "horaRetirada", "id", "retirada", "userID", "valorReserva" FROM "Reserva";
DROP TABLE "Reserva";
ALTER TABLE "new_Reserva" RENAME TO "Reserva";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
