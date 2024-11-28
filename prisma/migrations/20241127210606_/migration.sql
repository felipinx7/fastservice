/*
  Warnings:

  - You are about to drop the `Pratos` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `Pedido` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `descricao` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Pedido` table. All the data in the column will be lost.
  - You are about to drop the column `prato` on the `Pedido` table. All the data in the column will be lost.
  - Added the required column `id_mesa` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_pedido` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Pratos";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id_item" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_pedido" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    CONSTRAINT "ItemPedido_id_pedido_fkey" FOREIGN KEY ("id_pedido") REFERENCES "Pedido" ("id_pedido") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Pedido" (
    "id_pedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_mesa" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "dataed" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
