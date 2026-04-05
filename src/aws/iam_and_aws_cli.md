# IAM & AWS CLI

---

## Table of Contents

- [IAM](#iam)
- [AWS CLI](#aws-cli)
- [AWS SDK](#aws-sdk)
- [AWS CloudShell](#aws-cloudshell)

---

## IAM

<div style="text-align: center;">
  <img src="../images/aws/Identity and Access Management.svg" alt="AWS IAM" style="width:150px; height:auto;" />
</div>

### Users and Groups

- IAM = Identity and Access Management, **Global** service
- **Root account** created by default, shouldn't be user or shared
- **Users** are people within your organization, and can be grouped
- **Groups** only contain users, not other groups
- Users don't have to belong to a group, and user can belong to multiple groups

### Permissions

- **Users or Groups** can be assigned JSON documents called policies
- These policies define the permissions of the users
- In AWS you apply the **least privilege principle**: don't give more permissions than a user needs

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ec2:Describe*",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": "elasticloadbalancing:Describe*",
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudwatch:ListMetrics",
        "cloudwatch:GetMetricStatistics",
        "cloudwatch:Describe*"
      ],
      "Resource": "*"
    }
  ]
}
```

### Policies Structure

- Consists of
  - **Versions**: policy language version, always include `2012-10-17`
  - **Id**: an identifier for the policy _(optional)_
  - **Statement**: one or more individual statements _(required)_
- Statements consist of
  - **Sid**: an identifier for the statement _(optional)_
  - **Effect**: whether the statement allows or denies access _(Allow, Deny)_
  - **Principal**: account/user/role to which this policy applied to
  - **Action**: list of actions this policy allows or denies
  - **Resource**: list of resources to which the actions applied to
  - **Condition**: conditions for when this policy is in effect _(optional)_

```json
{
  "Version": "2012-10-17",
  "Id": "S3-Account-Permissions",
  "Statement": [
    {
      "Sid": "1",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:root"
      },
      "Action": ["s3:GetObject", "s3:PutObject"],
      "Resource": "arn:aws:s3:::my-bucket/*"
    }
  ]
}
```

### Password Policy

- Strong passwords = higher security for your account
- In AWS, you can setup a password policy:
  - Set a minimum password length
  - Require specific character types:
    - including uppercase letters
    - lowercase letters
    - numbers
    - non-alphanumeric characters
  - Allow all IAM users to change their own passwords
  - Require users to change their password after some time (password expiration)
  - Prevent password reuse

### Multi Factor Authentication (MFA)

- Users have access to your account and can possibly change configurations or delete resources in your AWS account
- **You want to protect your Root Accounts and IAM users**
- MFA = password _you know_ + security device _you own_
- **Main benefit of MFA**: if a password is stolen or hacked, the account is not compromised

### Roles for Services

- Some AWS services will need to perform actions on your behalf
- To do so, we will assign **permissions** to AWS services with **IAM roles**
- Common roles:
  - EC2 Instance Roles
  - Lambda Function Roles
  - Roles for CloudFormation

### Security Tools

- **IAM Credentials Report (account-level)**
  - a report that lists all your account's users and the status of their various credentials
- **IAM Access Advisor (user-level)**
  - Access advisor shows the services permissions granted to a user and when those services were last accessed
  - You can use this information to revise your policies

### Guidelines & Best Practices

- Don't use the root account except for AWS account setup
- One physical user = One AWS **user**
- **Assign users to groups** and assign permissions to groups
- Create a **strong password policy**
- Use and enforce the use of **Multi Factor Authentication (MFA)**
- Create and use **Roles** for giving permissions to AWS services
- Use Access Keys for Programmatic access (CLI or SDK)
- Audit permissions of your account using IAM Credentials Report & IAM Access Advisor
- **Never share IAM users & Access Keys**

---

## AWS CLI

<div style="text-align: center;">
  <img src="../images/aws/Command Line Interface.svg" alt="AWS CLI" style="width:150px; height:auto;" />
</div>

- A tool that enables you to interact with AWS services using commands in your command-line shell
- Direct access to public APIs of AWS services
- You can develop scripts to manage your resources
- It's open-source [AWS CLI](https://github.com/aws/aws-cli)
- Alternative to using AWS Management Console

```bash
$ aws s3 ls s3://my-bucket
```

---

## AWS SDK

<div style="text-align: center;">
  <img src="../images/aws/Tools and SDKs.svg" alt="AWS SDK" style="width:150px; height:auto;" />
</div>

- AWS Software Development Kit (AWS SDK)
- Language-specific APIs (set of libraries)
  - Enables you to access and manage AWS services programmatically
- Embedded within your application
- Supports
  - SDKs (JavaScript, Python, PHP, .NET, Ruby, Java, Go, Node.js, C++)
  - Mobile SDKs (Android, iOS, ...)
  - IoT Device SDKs (Embedded C, Arduino, ...)
- Example: AWS CLI is built on AWS SDK for Python

```python
import boto3

s3 = boto3.client('s3')
response = s3.list_buckets()

for bucket in response['Buckets']:
    print(bucket['Name'])
```

---

## AWS CloudShell

<div style="text-align: center;">
  <img src="../images/aws/CloudShell.svg" alt="AWS CloudShell" style="width:150px; height:auto;" />
</div>

- AWS CloudShell is a browser-based shell that makes it easy to securely manage, explore, and interact with your AWS resources
- Provides a pre-authenticated AWS Command Line Interface (CLI) environment
- No need to install or configure anything
- Access to AWS services and resources using the AWS CLI, AWS SDKs, and other command-line tools
- Persistent storage of 1 GB for each user, allowing you to save scripts, files, and configurations across sessions
- Supports multiple AWS regions, allowing you to work with resources in different regions without needing to reconfigure your CLI
- Integrated with AWS Identity and Access Management (IAM), allowing you to use your existing IAM permissions to access AWS resources securely
