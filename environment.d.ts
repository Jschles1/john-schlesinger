declare global {
    namespace NodeJS {
        interface ProcessEnv {
            AWS_ACCESS_KEY: string;
            AWS_SECRET_KEY: string;
            AWS_REGION: string;
            AWS_BUCKET_NAME: string;
        }
    }
}

export {};
