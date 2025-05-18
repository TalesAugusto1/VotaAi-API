-- AlterTable
ALTER TABLE `VotingOption` MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `VotingPool` MODIFY `description` VARCHAR(5000) NOT NULL;
