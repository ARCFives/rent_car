/*
  Warnings:

  - You are about to drop the column `agencia` on the `Reserva` table. All the data in the column will be lost.
  - Added the required column `agenciaRetirada` to the `Reserva` table without a default value. This is not possible if the table is not empty.
  - Added the required column `agenciaSaida` to the `Reserva` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "userID" INTEGER NOT NULL,
    "carName" TEXT NOT NULL,
    "agenciaRetirada" TEXT NOT NULL,
    "agenciaSaida" TEXT NOT NULL,
    CONSTRAINT "Reserva_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Reserva" ("carName", "codigoReserva", "dataEntrega", "dataRetirada", "entrega", "horaEntrega", "horaRetirada", "id", "retirada", "userID", "valorReserva") SELECT "carName", "codigoReserva", "dataEntrega", "dataRetirada", "entrega", "horaEntrega", "horaRetirada", "id", "retirada", "userID", "valorReserva" FROM "Reserva";
DROP TABLE "Reserva";
ALTER TABLE "new_Reserva" RENAME TO "Reserva";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
