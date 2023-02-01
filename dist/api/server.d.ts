import { FastifyInstance } from 'fastify';
interface ServerConfig {
    port?: number;
    defaultDelay?: number | {
        min: number;
        max: number;
    };
}
export declare function buildResults(count: number, routes: Record<string, any>, route: string): any;
export declare class Server {
    static run(routes: Record<string, any>, config: ServerConfig): FastifyInstance;
}
export {};
