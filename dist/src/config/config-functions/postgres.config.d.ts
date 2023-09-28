export declare const postgresConfig: (() => {
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    type: string;
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
    synchronize: boolean;
}>;
