import fastify, { FastifyInstance, FastifyRequest } from 'fastify';
import { Register } from '../core/register';
import address from '../generators/geographic/address';
import { int, normalDist } from '../generators/math/number';

type RequestQueryParameters = FastifyRequest<{
	Querystring: {
		count: number;
	}
}>

interface ServerConfig {
	port?: number;
	defaultDelay?: number | { min: number, max: number };
}

export function buildResults(count: number, route: string) {
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

// todo - add a type for the register
type routes = { [key: string]: any };

export class Server {
	public static run(routes: routes, config: ServerConfig): FastifyInstance {
		const server = fastify();

		for (const route in routes) {
			server.get(route, async (request: RequestQueryParameters) => {

				const results = buildResults(request.query.count, route);

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

		server.listen({ port: config.port || 3000 }, (err, address) => {
			if (err) {
				console.error(err);
				process.exit(1);
			}
			console.log(`tseudo server listening at ${address}`);
		});

		return server;
	}
}

async function pause(duration: number) {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
}

const user = {
	address: address,
	age: () => Math.round(normalDist(20, 40, 1))
};

const userRegister = new Register(user);

const routes: { [key: string]: any } = {
	'/user': userRegister,
};

Server.run(routes, { defaultDelay: { min: 100, max: 500 } });
