import { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";
import { CodePipeline, CodePipelineSource, ShellStep } from "aws-cdk-lib/pipelines";

import { DevelopmentStage } from "./development-stage";

export interface PipelineStackProps extends StackProps {
  readonly githubRepositoryOwner: string;
  readonly githubRepositoryName: string;
}

const getRepositoryString = (pipelineStackProps: PipelineStackProps): string => {
  return `${pipelineStackProps.githubRepositoryOwner}/${pipelineStackProps.githubRepositoryName}`;
};

export class PipelineStack extends Stack {
  constructor(scope: Construct, id: string, props: PipelineStackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, "Pipeline", {
      pipelineName: "CdkPipelineStarterKit",
      synth: new ShellStep("SynthStep", {
        input: CodePipelineSource.gitHub(getRepositoryString(props), "main"),
        commands: ["npm ci", "npm run build", "npx cdk synth"],
      }),
    });

    // This is where you can add additional application stages
    pipeline.addStage(new DevelopmentStage(this, "DevelopmentStage"));
  }
}
