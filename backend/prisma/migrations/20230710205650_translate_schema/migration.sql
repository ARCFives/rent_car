/*
  Warnings:

  - You are about to drop the `Lojas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Modelos` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Reserva` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `bairro` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `complemento` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nascimento` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `senha` on the `User` table. All the data in the column will be lost.
  - Added the required column `birthday` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `neighborhood` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Lojas";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Modelos";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Reserva";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "catchAgency" TEXT NOT NULL,
    "catchLocation" TEXT NOT NULL,
    "catchDate" TEXT NOT NULL,
    "catchHours" TEXT NOT NULL,
    "deliveryAgency" TEXT NOT NULL,
    "deliveryLocation" TEXT NOT NULL,
    "deliveryDate" TEXT NOT NULL,
    "deliveryHours" TEXT NOT NULL,
    "totalBooking" TEXT NOT NULL,
    "bookingCode" TEXT NOT NULL,
    "carName" TEXT NOT NULL,
    "userID" TEXT NOT NULL,
    CONSTRAINT "Booking_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Models" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carModel" TEXT NOT NULL,
    "priceDiary" REAL NOT NULL,
    "doorsCount" INTEGER NOT NULL,
    "bagsCount" INTEGER NOT NULL,
    "paxCount" INTEGER NOT NULL,
    "gearType" TEXT NOT NULL,
    "carImageUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Agencies" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "agencyName" TEXT NOT NULL,
    "agencyAndress" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "cpf" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "birthday" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "andress" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "nHouse" TEXT,
    "complement" TEXT,
    "password" TEXT NOT NULL
);
INSERT INTO "new_User" ("andress", "cep", "city", "cpf", "email", "gender", "id", "nHouse", "name", "state") SELECT "andress", "cep", "city", "cpf", "email", "gender", "id", "nHouse", "name", "state" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Booking_bookingCode_key" ON "Booking"("bookingCode");
