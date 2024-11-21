-- CreateTable
CREATE TABLE "Cardapio" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "categoria" TEXT,
    "preco" INTEGER NOT NULL,
    "foto" TEXT
);

-- CreateTable
CREATE TABLE "Pratos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prato" TEXT NOT NULL,
    "descricao" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Balconista" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "avaliacao" TEXT,
    "estrelas" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "prato" TEXT NOT NULL,
    "descricao" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Balconista_email_key" ON "Balconista"("email");
