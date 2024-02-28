import dotenv from 'dotenv';

dotenv.config();

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: number;
            MONGODB_URI: string;
        }
    }
}
