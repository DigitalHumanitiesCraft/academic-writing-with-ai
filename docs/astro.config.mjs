// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://digitalhumanitiescraft.github.io',
	base: '/academic-writing-with-ai',
	integrations: [
		starlight({
			title: 'AI-Assisted Academic Writing',
			description: 'A structured workflow for using Claude + Obsidian to accelerate academic writing.',
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/DigitalHumanitiesCraft/academic-writing-with-ai' }
			],
			sidebar: [
				{ label: 'Introduction', slug: 'index' },
				{
					label: 'The Workflow',
					items: [
						{ label: 'Core Insight', slug: 'index', hash: 'the-core-insight' },
						{ label: 'What is a Vault?', slug: 'index', hash: 'what-is-a-vault' },
						{ label: 'Vault Structure', slug: 'index', hash: 'vault-structure' },
						{ label: 'Safety Setup', slug: 'index', hash: 'safety-setup' },
					],
				},
				{
					label: 'Four Phases',
					items: [
						{ label: '1. Preparation', slug: 'index', hash: 'phase-1-preparation' },
						{ label: '2. Exploration', slug: 'index', hash: 'phase-2-exploration--mapping' },
						{ label: '3. Distillation', slug: 'index', hash: 'phase-3-distillation' },
						{ label: '4. Implementation', slug: 'index', hash: 'phase-4-implementation' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Domain Adaptation', slug: 'index', hash: 'domain-adaptation' },
						{ label: 'Effective Critique', slug: 'index', hash: 'effective-critique' },
						{ label: 'The Journal', slug: 'index', hash: 'the-journal' },
						{ label: 'Common Problems', slug: 'index', hash: 'common-problems' },
						{ label: 'Quick Reference', slug: 'index', hash: 'quick-reference' },
					],
				},
				{ label: 'Sources', slug: 'index', hash: 'sources' },
			],
			customCss: [
				'./src/styles/custom.css',
			],
		}),
	],
});
