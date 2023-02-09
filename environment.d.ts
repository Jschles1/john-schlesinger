declare global {
    namespace NodeJS {
        interface ProcessEnv {
            MY_AWS_ACCESS_KEY: string;
            MY_AWS_SECRET_KEY: string;
            MY_AWS_REGION: string;
            MY_AWS_BUCKET_NAME: string;
        }
    }
}

export {};
