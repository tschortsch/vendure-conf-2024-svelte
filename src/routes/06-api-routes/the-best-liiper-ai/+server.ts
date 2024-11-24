import type { RequestHandler } from './$types';
import { getTheBestLiiper } from './the-best-liiper-service';

export const GET: RequestHandler = () => {
	return new Response(getTheBestLiiper());
};
