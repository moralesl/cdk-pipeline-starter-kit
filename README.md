# CDK Pipeline starter kit

Starter kit for CDK pipelines.

## Prerequisites
To have AWS CodePipeline read from this GitHub repo, you need to have a [GitHub connection](https://docs.aws.amazon.com/codepipeline/latest/userguide/connections-github.html) set up. For more details on the underlying CDK code, see [GitHub, GitHub Enterprise, BitBucket using a connection](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.pipelines-readme.html#github-github-enterprise-bitbucket-using-a-connection).

Add your details in the `infrastructure/config.ts` file.

## Project structure
```
infrastructure/                 -- Contains all the infrastructure settings
├── index.ts                    -- Base setup for the underlying stack
├── config.ts                   -- Configurations
└── lib/
    ├── pipeline-stack.ts       -- Setup the CDK pipeline
    ├── development-stage.ts    -- Development stage, this become part of the pipeline. Could be used for testing, production, ... stages
    └── application-stack.ts    -- The application stack
```

## Usage
### Bootstrap your environment
```
cdk bootstrap
```

### Initial deployment
```
cdk deploy
```


## Resources
* [CDK Pipelines: Continuous delivery for AWS CDK applications](https://aws.amazon.com/blogs/developer/cdk-pipelines-continuous-delivery-for-aws-cdk-applications/)
