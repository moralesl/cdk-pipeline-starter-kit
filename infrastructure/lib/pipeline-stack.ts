import * as codepipeline from '@aws-cdk/aws-codepipeline';
import * as codepipeline_actions from '@aws-cdk/aws-codepipeline-actions';
import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CdkPipeline, SimpleSynthAction } from "@aws-cdk/pipelines";

import { DevelopmentStage } from './development-stage';

export interface PipelineStackProps extends StackProps {
  readonly githubRepositoryOwner: string;
  readonly githubRepositoryName: string;
}

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: PipelineStackProps) {
    super(scope, id, props);

    const sourceArtifact = new codepipeline.Artifact();
    const cloudAssemblyArtifact = new codepipeline.Artifact();

    const pipeline = new CdkPipeline(this, 'CdkPipelineStarterKit', {
      // The pipeline name
      pipelineName: 'CdkPipelineStarterKit',
      cloudAssemblyArtifact,

      // Where the source can be found
      sourceAction: new codepipeline_actions.GitHubSourceAction({
        actionName: 'GitHub',
        output: sourceArtifact,
        oauthToken: SecretValue.secretsManager('github-token'),
        owner: props.githubRepositoryOwner,
        repo: props.githubRepositoryName,
        trigger: codepipeline_actions.GitHubTrigger.POLL,
      }),

       // How it will be built and synthesized
       synthAction: SimpleSynthAction.standardNpmSynth({
         sourceArtifact,
         cloudAssemblyArtifact,

         // We need a build step to compile the TypeScript Lambda
         buildCommand: 'npm run build'
       }),
    });

    // This is where you can add additional application stages
    pipeline.addApplicationStage(new DevelopmentStage(this, 'DevelopmentStage'))
  }
}
