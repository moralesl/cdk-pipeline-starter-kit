import { Construct } from "constructs";
import { Stage, StageProps } from "aws-cdk-lib";
import { ApplicationStack } from './application-stack';

export class DevelopmentStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new ApplicationStack(this, 'ApplicationStack');
  }
}
