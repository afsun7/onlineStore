import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {	rules: {
		'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
		'jsx-quotes': ['error', 'prefer-single'],
		'react/jsx-no-literals': 'error',
		'no-restricted-imports': [
			'error',
			{
				name: 'next/link',
				message: 'Please import from `@/i18n/routing` instead.'
			},
			{
				name: 'next/navigation',
				importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
				message: 'Please import from `@/i18n/routing` instead.'
			}
		]
	}}
];

export default eslintConfig;
