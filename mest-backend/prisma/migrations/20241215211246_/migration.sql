/*
  Warnings:

  - You are about to drop the column `genre` on the `FavoriteMovie` table. All the data in the column will be lost.
  - You are about to drop the column `releaseYear` on the `FavoriteMovie` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `FavoriteMovie` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "FavoriteMovie" DROP COLUMN "genre",
DROP COLUMN "releaseYear",
DROP COLUMN "title";
