import { describe, it, expect } from 'vitest';
import { load } from './+page';

describe('page', () => {
	it('should return origin', async () => {
		// arrange
		const url = new URL('http://localhost:1234/bla?x=1');
		// act
		const { origin } = await load({ url });
		// assert
		expect(origin).toBe('http://localhost:1234');
	});
});
