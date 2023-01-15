import { FastifyInstance } from 'fastify';
interface ServerConfig {
    port?: number;
    defaultDelay?: number | {
        min: number;
        max: number;
    };
}
export declare function buildResults(count: number, route: string): any;
type routes = {
    [key: string]: any;
};
export declare class Server {
    static run(routes: routes, config: ServerConfig): FastifyInstance;
}
declare const routes: {
    [key: string]: any;
};
export {};
