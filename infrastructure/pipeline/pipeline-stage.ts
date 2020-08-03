import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { DemoStack } from '../lib/demo-stack';

export class PipelineStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new DemoStack(this, 'Demo');
  }
}
