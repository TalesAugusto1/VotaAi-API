-- CreateTable
CREATE TABLE `VotingParticipation` (
    `id` VARCHAR(191) NOT NULL,
    `timestamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` VARCHAR(191) NOT NULL,
    `poolId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `VotingParticipation_userId_poolId_key`(`userId`, `poolId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `VotingParticipation` ADD CONSTRAINT `VotingParticipation_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `VotingParticipation` ADD CONSTRAINT `VotingParticipation_poolId_fkey` FOREIGN KEY (`poolId`) REFERENCES `VotingPool`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
