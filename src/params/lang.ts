import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (lang: string) => ['de', 'fr', 'it'].includes(lang);
