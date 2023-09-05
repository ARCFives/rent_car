-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cpf" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "CEP" INTEGER NOT NULL,
    "andress" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "nHouse" INTEGER,
    "complemento" TEXT,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Reserva" (
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
    "agencia" TEXT NOT NULL,
    CONSTRAINT "Reserva_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Modelos" (
    "carModelID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "carModel" TEXT NOT NULL,
    "priceDiaria" INTEGER NOT NULL,
    "portasCount" INTEGER NOT NULL,
    "malasCount" INTEGER NOT NULL,
    "paxCount" INTEGER NOT NULL,
    "gearType" TEXT NOT NULL,
    "carImageUrl" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Lojas" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agencia" TEXT NOT NULL,
    "endereco" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_cpf_key" ON "User"("cpf");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
