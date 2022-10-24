import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:3000/graphql',
    documents: 'src/app/services/graphql/*.graphql',
    generates: {
        'src/app/services/graphql/generated/types.ts': {
            plugins: ['typescript'],
        },
        'src/app/services/graphql/': {
            preset: 'near-operation-file',
            presetConfig: {
                extension: '.gql.service.ts',
                baseTypesPath: 'generated/types.ts',
                folder: 'generated',
            },
            plugins: ['typescript-operations', 'typescript-apollo-angular'],
            config: {
                addExplicitOverride: true,
            },
        },
    },
    hooks: { afterAllFileWrite: ['npx lint-staged'] },
};

export default config;
