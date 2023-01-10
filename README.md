# CDK Pipeline starter kit

Starter kit for CDK pipelines.

## Prerequisites
To have AWS CodePipeline read from this GitHub repo, you also need to have a [GitHub personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) stored as a plaintext secret (not a JSON secret) in [AWS Secrets Manager](https://aws.amazon.com/secrets-manager/) under the name github-token. For instructions, see [Tutorial: Creating and Retrieving a Secret](https://docs.aws.amazon.com/secretsmanager/latest/userguide/tutorials_basic.html). The token should have the scopes `repo` and `admin:repo_hook`.

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
### Install dependencies
```
npm install
```

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
