/*
  Warnings:

  - A unique constraint covering the columns `[movie_id]` on the table `FavoriteMovie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movie_id` to the `FavoriteMovie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "FavoriteMovie" ADD COLUMN     "movie_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteMovie_movie_id_key" ON "FavoriteMovie"("movie_id");
