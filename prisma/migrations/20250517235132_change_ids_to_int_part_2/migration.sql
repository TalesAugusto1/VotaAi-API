/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `VotingOption` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `VotingOption` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `poolId` on the `VotingOption` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `VotingParticipation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `VotingParticipation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `userId` on the `VotingParticipation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `poolId` on the `VotingParticipation` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `VotingPool` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `VotingPool` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `User` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `VotingOption` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `poolId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `VotingParticipation` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    MODIFY `userId` INTEGER NOT NULL,
    MODIFY `poolId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `VotingPool` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE INDEX `User_role_idx` ON `User`(`role`);

-- CreateIndex
CREATE INDEX `VotingParticipation_userId_idx` ON `VotingParticipation`(`userId`);

-- CreateIndex
CREATE INDEX `VotingParticipation_timestamp_idx` ON `VotingParticipation`(`timestamp`);

-- CreateIndex
CREATE INDEX `VotingPool_status_idx` ON `VotingPool`(`status`);

-- CreateIndex
CREATE INDEX `VotingPool_startDate_endDate_idx` ON `VotingPool`(`startDate`, `endDate`);

-- CreateIndex
CREATE INDEX `VotingPool_category_idx` ON `VotingPool`(`category`);

-- CreateIndex
CREATE INDEX `VotingPool_createdAt_idx` ON `VotingPool`(`createdAt`);

-- AddForeignKey
ALTER TABLE `VotingOption` ADD CONSTRAINT `VotingOption_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `VotingPool`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotingParticipation` ADD CONSTRAINT `VotingParticipation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotingParticipation` ADD CONSTRAINT `VotingParticipation_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `VotingPool`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- RedefineIndex
CREATE INDEX `VotingOption_poolId_idx` ON `VotingOption`(`poolId`);

-- RedefineIndex
CREATE INDEX `VotingParticipation_poolId_idx` ON `VotingParticipation`(`poolId`);
