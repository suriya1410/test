import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';
import {DockerImageAsset} from 'aws-cdk-lib/aws-ecr-assets'
import * as path from 'path'


export class HelloCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const imageAsset = new DockerImageAsset(this, 'ImageAsset', {
      directory: path.join(__dirname, '../docker')
  })


  }
}

