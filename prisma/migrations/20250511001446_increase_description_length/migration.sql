-- AlterTable
ALTER TABLE `votingoption` MODIFY `description` VARCHAR(5000) NULL;

-- AlterTable
ALTER TABLE `votingpool` MODIFY `description` VARCHAR(5000) NOT NULL;
