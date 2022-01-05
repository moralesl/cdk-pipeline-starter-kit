import { Construct } from "constructs";
import { Stack, StackProps } from "aws-cdk-lib";

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Your application code goes here...    
  }
}
