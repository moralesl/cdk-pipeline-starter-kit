import { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";
import {Function, InlineCode, Runtime} from "aws-cdk-lib/aws-lambda";

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Your application code goes here...
    new Function(this, 'LambdaFunction', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: new InlineCode('exports.handler = _ => "Hello, CDK, from CDK Pipelines";')
    });
  }
}
