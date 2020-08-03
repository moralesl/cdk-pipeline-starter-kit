import { Construct, Stage, StageProps } from '@aws-cdk/core';
import { ApplicationStack } from './application-stack';

export class ApplicationStage extends Stage {
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    new ApplicationStack(this, 'ApplicationStack');
  }
}
