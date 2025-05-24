import {defineConfig} from '@tsc-run/core';

export default defineConfig({
    projectName: 'example',
    environment: 'dev',
    provider: 'aws',
    region: 'eu-west-2',
});
