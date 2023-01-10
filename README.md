# CDK Pipelines Starter Kit

Built with the [Starter kit for CDK pipelines](https://github.com/moralesl/cdk-pipeline-starter-kit).

## Architecture overview
![CDK Pipeline architecture overview](img/Architecture-Overview.png)

## Project structure
```
infrastructure/                 -- Contains all the infrastructure settings
├── index.ts                    -- Base setup for the underlying stack
├── config.ts                   -- Configurations
└── pipeline/
    ├── pipeline-stack.ts       -- Setup the CDK pipeline
    ├── development-stage.ts    -- Development stage, this become part of the pipeline. Could be used for testing, production, ... stages
    └── application-stack.ts    -- The application stack
```

## Usage
This project relies on [copier](https://copier.readthedocs.io/en/latest/), for installation instructions look [here](https://github.com/copier-org/copier/#installation).

### Scaffold your project
```
copier https://github.com/moralesl/cdk-pipeline-starter-kit path/to/destination
```
Afterwards take a look into the generated [README.md](README.md.jinja) for further instructions to setup the pipeline.


## Resources
* [CDK Pipelines: Continuous delivery for AWS CDK applications](https://aws.amazon.com/blogs/developer/cdk-pipelines-continuous-delivery-for-aws-cdk-applications/)
