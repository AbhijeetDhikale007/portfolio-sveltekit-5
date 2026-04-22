import { error } from '@sveltejs/kit';
import { SkillCategories } from '$data/Skills';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
    // Find the skill matching the slug
    for (const category of SkillCategories) {
        const found = category.skills.find(s => s.slug === params.slug);
        if (found) {
            return {
                skill: found
            };
        }
    }

    // If no skill is found with that slug, throw a 404
    throw error(404, 'Skill not found');
};
