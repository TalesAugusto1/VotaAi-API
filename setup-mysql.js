/**
 * MySQL Setup Helper for VotaAí API
 *
 * This script helps to:
 * 1. Check if MySQL is running
 * 2. Create the database if it doesn't exist
 * 3. Create a .env file with the correct MySQL connection string
 */

const mysql = require("mysql2/promise");
const fs = require("fs");
const { exec } = require("child_process");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

async function main() {
  console.log("=== MySQL Setup for VotaAí API ===");

  let host = "localhost";
  let port = "3306";
  let user = "root";
  let password = "";
  let database = "votaai";

  console.log("\nPlease provide your MySQL connection details:");

  host = (await askQuestion(`Host [${host}]: `)) || host;
  port = (await askQuestion(`Port [${port}]: `)) || port;
  user = (await askQuestion(`User [${user}]: `)) || user;
  password = await askQuestion(`Password: `);
  database = (await askQuestion(`Database name [${database}]: `)) || database;

  console.log("\nTesting connection to MySQL...");

  try {
    // First try to connect to MySQL server
    const connection = await mysql.createConnection({
      host,
      port,
      user,
      password,
    });

    console.log("✅ Connected to MySQL server successfully!");

    // Check if database exists
    const [rows] = await connection.execute(
      `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = ?`,
      [database]
    );

    if (rows.length === 0) {
      console.log(`\nDatabase '${database}' does not exist. Creating it...`);
      await connection.execute(`CREATE DATABASE ${database}`);
      console.log(`✅ Database '${database}' created successfully!`);
    } else {
      console.log(`\nDatabase '${database}' already exists.`);
    }

    // Create .env file
    const envContent = `DATABASE_URL="mysql://${user}:${password}@${host}:${port}/${database}"
PORT=3000
JWT_SECRET="your-super-secret-jwt-key-change-in-production"
JWT_EXPIRES_IN="7d"
FRONTEND_URL="http://localhost:5173"
NODE_ENV="development"`;

    fs.writeFileSync(".env", envContent);
    console.log("\n✅ Created .env file with MySQL connection string.");

    console.log("\nNext steps:");
    console.log("1. Run: npx prisma generate");
    console.log("2. Run: npx prisma migrate dev --name init");
    console.log("3. Start your API with: npm run dev");

    const runSetup = await askQuestion(
      "\nWould you like to run these commands now? (y/n): "
    );

    if (runSetup.toLowerCase() === "y") {
      console.log("\nRunning Prisma generate...");
      exec("npx prisma generate", (error, stdout, stderr) => {
        if (error) {
          console.error(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          console.error(`stderr: ${stderr}`);
          return;
        }
        console.log(`${stdout}`);

        console.log("\nRunning Prisma migrate...");
        exec("npx prisma migrate dev --name init", (error, stdout, stderr) => {
          if (error) {
            console.error(`Error: ${error.message}`);
            return;
          }
          console.log(`${stdout}`);
          console.log(
            "\n✅ Setup complete! You can now run your API with: npm run dev"
          );
          rl.close();
        });
      });
    } else {
      rl.close();
    }
  } catch (error) {
    console.error("\n❌ Connection failed:");
    console.error(error.message);
    console.log("\nPlease check:");
    console.log("1. MySQL server is running");
    console.log("2. Username and password are correct");
    console.log(
      "3. MySQL is accepting connections on the specified host and port"
    );
    rl.close();
  }
}

main();
