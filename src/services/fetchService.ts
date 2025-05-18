import dotenv from "dotenv";

dotenv.config();
export class FetchService {
    private baseUrl: string;
    constructor() {
      const apiUrl = process.env.BLOCKCHAIN_API_URL;
      if (!apiUrl) {
        throw new Error("BLOCKCHAIN_API_URL is not defined");
      }
      this.baseUrl = apiUrl;
    }
  
    async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "GET",
        ...options,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": String(process.env.SECRET_KEY),
          ...(options?.headers || {}),
        },
      });
      if (!response.ok) {
        throw new Error(`GET ${endpoint} failed: ${response.statusText}`);
      }
      return response.json() as Promise<T>;
    }
  
    async post<T, U = unknown>(endpoint: string, data: U, options?: RequestInit): Promise<T> {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: "POST",
        body: JSON.stringify(data),
        ...options,
        headers: {
          "Content-Type": "application/json",
          "x-api-key": String(process.env.SECRET_KEY),
          ...(options?.headers || {}),
        },
      });
      if (!response.ok) {
        throw new Error(`POST ${endpoint} failed: ${response.statusText}`);
      }
      return response.json() as Promise<T>;
    }
  }