"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchService = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class FetchService {
    constructor() {
        const apiUrl = process.env.BLOCKCHAIN_API_URL;
        if (!apiUrl) {
            throw new Error("BLOCKCHAIN_API_URL is not defined");
        }
        this.baseUrl = apiUrl;
    }
    async get(endpoint, options) {
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
        return response.json();
    }
    async post(endpoint, data, options) {
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
        return response.json();
    }
}
exports.FetchService = FetchService;
