#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { PipelineStack } from './pipeline/pipeline-stack';

const app = new cdk.App();
new PipelineStack(app, 'CdkPipelineStarterKitStack', {
    env: {
        region: 'eu-central-1'
    }
});

app.synth()
