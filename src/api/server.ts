import fastify, { FastifyInstance, FastifyRequest } from 'fastify';

type RequestQueryParameters = FastifyRequest<{
    Querystring: {
        count: number;
    }
}>

interface ServerConfig {
    port?: number;
}

// todo - add a type for the register
type routes = { [key: string]: any };

export class Server {
    public static run(routes: routes, config: ServerConfig): FastifyInstance {
        const server = fastify();

        for (let route in routes) {
            server.get(route, async (request: RequestQueryParameters, reply) => {
                // do something with request.count
                if (request.query.count) {
                    const results = [];
                    for (let i = request.query.count; i > 0; i--) {
                        results.push(routes[route].build())
                    }
                    return results;
                } else {
                    return routes[route].build();
                }
            });
        }

        server.listen({ port: config.port || 3000 }, (err, address) => {
            if (err) {
                console.error(err)
                process.exit(1)
            }
            console.log(`tseudo server listening at ${address}`)
        });

        return server;
    }
}

// const user = {
//     address: address,
//     age: () => Math.round(normalDist(20, 40, 1))
// };

// const userRegister = new Register(user);

// const routes: { [key: string]: any } = {
//     '/user': userRegister,
// };

// Server.run(routes, {});

//? Also could add a delay param for a build in delay? Also could be drawn across a normal dist?
