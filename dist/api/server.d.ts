import { FastifyInstance } from 'fastify';
interface ServerConfig {
    port?: number;
}
type routes = {
    [key: string]: any;
};
export declare class Server {
    static run(routes: routes, config: ServerConfig): FastifyInstance;
}
export {};
