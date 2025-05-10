# Setting Up MySQL for VotaAí API

This guide will help you set up MySQL for your VotaAí API after switching from PostgreSQL.

## Installing MySQL

### Windows

1. **Download MySQL Installer**

   - Go to the [MySQL Downloads page](https://dev.mysql.com/downloads/installer/)
   - Download the MySQL Installer for Windows

2. **Run the Installer**

   - Choose "Developer Default" or "Server only" installation
   - Follow the setup steps
   - Set a root password (remember this!)
   - Complete the installation

3. **Verify Installation**
   - Open MySQL Command Line Client (installed with MySQL)
   - Enter your root password
   - If you see the MySQL prompt (`mysql>`), the installation was successful

### Using Docker

1. **Create a docker-compose.yml file**:

   ```yaml
   version: "3"
   services:
     db:
       image: mysql:8.0
       environment:
         MYSQL_ROOT_PASSWORD: password
         MYSQL_DATABASE: votaai
       ports:
         - "3306:3306"
       volumes:
         - mysql_data:/var/lib/mysql
       command: --default-authentication-plugin=mysql_native_password

   volumes:
     mysql_data:
   ```

2. **Start the container**:
   ```
   docker-compose up -d
   ```

## Creating the Database

1. **Connect to MySQL**:

   ```
   mysql -u root -p
   ```

   Enter your password when prompted.

2. **Create the database**:

   ```sql
   CREATE DATABASE votaai;
   ```

3. **Create a dedicated user (optional but recommended)**:
   ```sql
   CREATE USER 'votaai_user'@'localhost' IDENTIFIED BY 'your_password';
   GRANT ALL PRIVILEGES ON votaai.* TO 'votaai_user'@'localhost';
   FLUSH PRIVILEGES;
   ```

## Configuring Your API

1. **Update your .env file**:

   ```
   DATABASE_URL="mysql://root:your_password@localhost:3306/votaai"
   ```

   If you created a dedicated user:

   ```
   DATABASE_URL="mysql://votaai_user:your_password@localhost:3306/votaai"
   ```

2. **Generate Prisma client**:

   ```
   npx prisma generate
   ```

3. **Create and apply migrations**:
   ```
   npx prisma migrate dev --name init
   ```

## Troubleshooting

### Connection Issues

If you're having trouble connecting to MySQL:

1. **Check MySQL Service**

   - On Windows, ensure the MySQL service is running:
     - Open Services (services.msc)
     - Find "MySQL" in the list
     - Ensure it's "Running" and set to "Automatic" startup

2. **Firewall Settings**

   - Ensure your firewall allows connections on port 3306

3. **Test Connection**

   - Use this command to test your connection string:

   ```
   npx prisma db pull
   ```

   If successful, you should see your database schema.

### Binary Storage Issues

MySQL handles binary data differently than PostgreSQL. If you encounter issues with image storage:

1. **Check your MySQL version** - MySQL 8.0+ is recommended
2. **Ensure BLOB columns are large enough** - For larger images, you might need MEDIUMBLOB or LONGBLOB

## MySQL vs PostgreSQL Differences

When switching from PostgreSQL to MySQL, be aware of these differences:

1. **Case Sensitivity** - Table names can be case-sensitive in MySQL depending on your OS
2. **Transaction Isolation** - Default isolation levels differ
3. **JSON Support** - MySQL has more limited JSON functionality
4. **Text/BLOB Limitations** - There are size limits on TEXT/BLOB columns

For binary storage specifically, MySQL uses TINYBLOB, BLOB, MEDIUMBLOB, and LONGBLOB types with different size limits:

- TINYBLOB: Up to 255 bytes
- BLOB: Up to 65 KB
- MEDIUMBLOB: Up to 16 MB
- LONGBLOB: Up to 4 GB

Prisma's `Bytes` type maps to LONGBLOB in MySQL by default, which should be sufficient for most images.

## Helpful MySQL Commands

```sql
-- List all databases
SHOW DATABASES;

-- Use the votaai database
USE votaai;

-- List all tables
SHOW TABLES;

-- Describe a table structure
DESCRIBE User;

-- Check the version
SELECT version();
```
