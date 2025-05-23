# VotaAí API

This is the backend API for the VotaAí application, a platform for creating and participating in voting pools.

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete voting pools
- Submit votes on voting pools
- Get voting results
- Support for anonymous voting
- Location-based voting pools
- **Binary image storage** for avatars, voting pools, and options

## Technologies

- Node.js with Express
- TypeScript
- Prisma ORM
- MySQL
- JWT Authentication
- Zod for validation
- Multer for file uploads

## Prerequisites

- Node.js (v16 or higher)
- MySQL

## Setup

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/VotaAi-API.git
   cd VotaAi-API
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:

   ```
   DATABASE_URL="mysql://username:password@localhost:3306/votaai"
   PORT=3000
   JWT_SECRET="your-super-secret-jwt-key-change-in-production"
   JWT_EXPIRES_IN="7d"
   FRONTEND_URL="http://localhost:5173"
   NODE_ENV="development"
   ```

4. Generate Prisma client:

   ```
   npm run prisma:generate
   ```

5. Run database migrations:

   ```
   npm run prisma:migrate
   ```

6. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user (supports file upload for avatar)
- `POST /api/auth/login` - Login with CPF and password
- `POST /api/auth/logout` - Logout
- `GET /api/auth/me` - Get current user details
- `GET /api/auth/avatar/:userId` - Get user avatar image
- `POST /api/auth/avatar` - Update user avatar (file upload)

### Voting Pools

- `GET /api/voting-pools` - Get all voting pools
- `GET /api/voting-pools/:id` - Get a specific voting pool
- `GET /api/voting-pools/:id/image` - Get voting pool image
- `GET /api/voting-pools/option/:id/image` - Get voting option image
- `POST /api/voting-pools` - Create a new voting pool (supports file uploads)
- `PUT /api/voting-pools/:id` - Update a voting pool (supports file uploads)
- `DELETE /api/voting-pools/:id` - Delete a voting pool

### Votes

- `POST /api/votes` - Submit a vote
- `GET /api/votes/user` - Get all votes for the current user
- `GET /api/votes/user/pools/:poolId` - Check if user has voted in a pool

### Results

- `GET /api/results/pools/:poolId` - Get results for a specific voting pool
- `GET /api/results/pools` - Get results for all pools the user has voted in

## Working with Images

### Image Handling

This API stores images as binary data directly in the database. Instead of URLs, each entity (User, VotingPool, VotingOption) has dedicated endpoints to serve images:

- User avatars: `GET /api/auth/avatar/:userId`
- Voting pool images: `GET /api/voting-pools/:id/image`
- Voting option images: `GET /api/voting-pools/option/:id/image`

When fetching entities, they include a `hasImage` flag indicating whether an image is available.

### Uploading Images

For endpoints that accept image uploads:

1. **User Registration with Avatar**:

   ```
   POST /api/auth/register
   Content-Type: multipart/form-data

   name: "User Name"
   cpf: "12345678901"
   email: "user@example.com"
   password: "password123"
   avatar: [file]
   ```

2. **Update User Avatar**:

   ```
   POST /api/auth/avatar
   Content-Type: multipart/form-data

   avatar: [file]
   ```

3. **Create Voting Pool with Image**:

   ```
   POST /api/voting-pools
   Content-Type: multipart/form-data

   title: "Pool Title"
   description: "Description"
   category: "Category"
   image: [file]
   startDate: "2023-10-01T00:00:00Z"
   endDate: "2023-10-15T00:00:00Z"
   anonymous: false
   options: [{"text":"Option 1"}, {"text":"Option 2"}]
   ```

4. **Create Voting Pool with Option Images**:

   ```
   POST /api/voting-pools
   Content-Type: multipart/form-data

   title: "Pool Title"
   description: "Description"
   category: "Category"
   image: [file]
   startDate: "2023-10-01T00:00:00Z"
   endDate: "2023-10-15T00:00:00Z"
   anonymous: false
   hasOptionImages: true
   options: [{"text":"Option 1"}, {"text":"Option 2"}]
   option0: [file]
   option1: [file]
   ```

### Frontend Integration Tips

1. When displaying entities, check the `hasImage` flag to determine if you should fetch and display the image.
2. Use the dedicated image endpoints to load images (e.g., `<img src="/api/voting-pools/123/image" />`)
3. For uploading images, use `FormData` to send multipart/form-data requests.

## Development

To run the development server with hot-reloading:

```
npm run dev
```

## Production

To build for production:

```
npm run build
```

To start the production server:

```
npm start
```

## Architecture

This API follows the SOLID principles and clean architecture:

- **Routes**: Handle HTTP requests and route them to the appropriate controllers
- **Controllers**: Handle the business logic of the application
- **Prisma**: Handles data access and persistence
- **Middleware**: Includes authentication, validation, and error handling
- **Utilities**: Contains helpers for authentication, cron jobs, etc.

## License

This project is licensed under the MIT License.
#   V o t a A i - A P I 
 
 
