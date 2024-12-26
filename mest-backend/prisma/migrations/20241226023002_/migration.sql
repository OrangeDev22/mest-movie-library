-- DropForeignKey
ALTER TABLE "FavoriteMovie" DROP CONSTRAINT "FavoriteMovie_userId_fkey";

-- AddForeignKey
ALTER TABLE "FavoriteMovie" ADD CONSTRAINT "FavoriteMovie_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
