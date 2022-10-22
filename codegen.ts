import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    overwrite: true,
    schema: 'http://localhost:3000/graphql',
    documents: 'src/app/services/graphql/ping.graphql',
    generates: {
        'src/app/services/graphql/generated/ping.gql.service.ts': {
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-apollo-angular',
            ],
        },
    },
};

export default config;
