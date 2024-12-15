/*
  Warnings:

  - You are about to drop the column `movie_id` on the `FavoriteMovie` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[movieId]` on the table `FavoriteMovie` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `movieId` to the `FavoriteMovie` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "FavoriteMovie_movie_id_key";

-- AlterTable
ALTER TABLE "FavoriteMovie" DROP COLUMN "movie_id",
ADD COLUMN     "movieId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteMovie_movieId_key" ON "FavoriteMovie"("movieId");
