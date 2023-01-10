#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { PipelineStack } from "./lib/pipeline-stack";

import { config } from "./config";

const app = new cdk.App();
const stack = new PipelineStack(app, "CdkPipelineStarterKitStack", {
  githubRepositoryOwner: config.github.owner,
  githubRepositoryName: config.github.repository,
  githubRepositoryBranch: config.github.branch,

  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});

cdk.Tags.of(stack).add("Project", "CDK Pipeline Starter Kit");
