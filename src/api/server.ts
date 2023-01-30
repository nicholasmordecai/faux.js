import fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import { int } from '../generators/math/number';

type RequestQueryParameters = FastifyRequest<{
	Querystring: {
		count: number;
	}
}>

interface ServerConfig {
	port?: number;
	defaultDelay?: number | { min: number, max: number };
}

export function buildResults(count: number, routes: Record<string, any>, route: string) {
	if (count) {
		const results = [];
		for (let i = count; i > 0; i--) {
			results.push(routes[route].build());
		}
		return results;
	} else {
		return routes[route].build();
	}
}


export class Server {
	public static run(routes: Record<string, any>, config: ServerConfig): FastifyInstance {
		const server = fastify();

		buildRoutes(server, routes, config);

		server.listen({ port: config.port || 3000 }, (err, address) => {
			if (err) handleError(err);
			console.log(`faux.js server listening at ${address}`);
		});

		return server;
	}
}

function handleError(err: Error) {
	console.error(err);
	process.exit(1);
}

async function buildRoutes(server: FastifyInstance, routes: Record<string, any>, config: ServerConfig) {
	for (const route in routes) {
		server.get(route, async (request: RequestQueryParameters) => {

			const results = buildResults(request.query.count, routes, route);

			// If there is a default, wrap the returned response in a set timeout
			if (config.defaultDelay) {

				let delay: number;
				if (typeof config.defaultDelay === 'number') {
					delay = config.defaultDelay;
				} else {
					delay = int({ min: config.defaultDelay.min, max: config.defaultDelay.max });
				}

				await pause(delay);
				return results;
			} else {
				return results;
			}
		});
	}
}

async function pause(duration: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

// const user = {
// 	address: address,
// 	age: () => Math.round(normalDist(20, 40, 2))
// };

// const userRegister = new Factory(user);

// const routes: { [key: string]: any } = {
// 	'/user': userRegister,
// };

// Server.run(routes, {});
