# IAM & AWS CLI

---

## Table of Contents

- [IAM](#iam)
- [AWS CLI](#aws-cli)
- [AWS SDK](#aws-sdk)

---

## IAM

<div style="text-align: center;">
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="150px" height="auto" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Icon-Architecture/32/Arch_AWS-Identity-and-Access-Management_32</title>
      <g id="Icon-Architecture/32/Arch_AWS-Identity-and-Access-Management_32" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Icon-Architecture-BG/32/Security-Identity-Compliance" fill="#DD344C">
              <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
          </g>
          <path d="M7,30 L33,30 L33,11 L7,11 L7,30 Z M34,10.5 L34,30.5 C34,30.776 33.776,31 33.5,31 L6.5,31 C6.224,31 6,30.776 6,30.5 L6,10.5 C6,10.224 6.224,10 6.5,10 L33.5,10 C33.776,10 34,10.224 34,10.5 L34,10.5 Z M22,24 L30,24 L30,23 L22,23 L22,24 Z M28,21 L31,21 L31,20 L28,20 L28,21 Z M22,21 L26,21 L26,20 L22,20 L22,21 Z M15,23.5 C15,23.224 14.775,23 14.5,23 C14.225,23 14,23.224 14,23.5 C14,23.776 14.225,24 14.5,24 C14.775,24 15,23.776 15,23.5 L15,23.5 Z M16,23.5 C16,24.151 15.581,24.701 15,24.908 L15,26 L14,26 L14,24.908 C13.419,24.701 13,24.151 13,23.5 C13,22.673 13.673,22 14.5,22 C15.327,22 16,22.673 16,23.5 L16,23.5 Z M10,26.996 L18.997,27 L18.998,25 L17,25 L17,24 L18.998,24 L18.999,23 L17,23 L17,22 L18.999,22 L19,20.004 L10.003,20 L10,26.996 Z M11,19 L17.998,19.003 L17.998,15.577 C17.998,14.759 17.332,14.163 16.935,13.881 C16.248,13.393 15.338,13.101 14.5,13.101 L14.499,13.101 C12.734,13.101 11.002,14.326 11.001,15.575 L11,19 Z M9,27.496 L9.003,19.5 C9.003,19.367 9.056,19.24 9.149,19.146 C9.243,19.053 9.37,19 9.503,19 L10,19 L10.001,15.575 C10.002,13.586 12.376,12.101 14.499,12.101 L14.5,12.101 C15.553,12.101 16.651,12.453 17.514,13.065 C18.472,13.746 18.999,14.638 18.998,15.578 L18.998,19.004 L19.5,19.004 C19.776,19.004 20,19.228 20,19.504 L19.997,27.5 C19.997,27.633 19.944,27.76 19.851,27.854 C19.757,27.947 19.63,28 19.497,28 L9.5,27.996 C9.224,27.996 9,27.772 9,27.496 L9,27.496 Z M29,18 L31,18 L31,17 L29,17 L29,18 Z M22,18 L28,18 L28,17 L22,17 L22,18 Z" id="AWS-Identity-and-Access-Management_Icon_32_Squid" fill="#FFFFFF"></path>
      </g>
  </svg>
</div>

### Users and Groups

- IAM = Identity and Access Management, **Global** service
- **Root account** created by default, shouldn't be user or shared
- **Users** are people within your organization, and can be grouped
- **GRoups** only contain users, not other groups
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
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="150px" height="auto" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Icon-Architecture/32/Arch_AWS-Command-Line-Interface_32</title>
      <g id="Icon-Architecture/32/Arch_AWS-Command-Line-Interface_32" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Icon-Architecture-BG/32/Developer-Tools" fill="#C925D1">
              <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
          </g>
          <path d="M6,7 L6,34 L23,34 L23,33 L7,33 L7,12 L33,12 L33,33 L30,33 L30,34 L34,34 L34,7 L6,7 Z M7,11 L33,11 L33,8 L7,8 L7,11 Z M13,10 L14,10 L14,9 L13,9 L13,10 Z M11,10 L12,10 L12,9 L11,9 L11,10 Z M9,10 L10,10 L10,9 L9,9 L9,10 Z M10.647,18.354 L15.293,23 L10.647,27.647 L11.353,28.353 L16.707,23 L11.353,17.646 L10.647,18.354 Z M19,26 L28,26 L28,25 L19,25 L19,26 Z" id="AWS-Command-Line-Interface_Icon_32_Squid" fill="#FFFFFF"></path>
      </g>
  </svg>
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
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="150px" height="auto" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Icon-Architecture/32/Arch_AWS-Tools-and-SDKs_32</title>
      <g id="Icon-Architecture/32/Arch_AWS-Tools-and-SDKs_32" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Icon-Architecture-BG/32/Developer-Tools" fill="#C925D1">
              <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
          </g>
          <path d="M21,32.49075 L21,29.50075 L20,29.50075 L20,32.49075 L9,26.13975 L9,13.84975 L12.757,15.93775 L13.243,15.06375 L9.54,13.00575 L20.5,7.06975 L31.46,13.00675 L27.757,15.06375 L28.243,15.93775 L32,13.85075 L32,26.13975 L21,32.49075 Z M32.737,12.56075 L20.738,6.06075 C20.59,5.97975 20.41,5.97975 20.262,6.06075 L8.262,12.56075 C8.101,12.64875 8,12.81675 8,13.00075 L8,26.42875 C8,26.60775 8.096,26.77275 8.25,26.86175 L20.25,33.78975 C20.327,33.83375 20.414,33.85675 20.5,33.85675 C20.586,33.85675 20.673,33.83375 20.75,33.78975 L32.749,26.86175 C32.903,26.77275 32.999,26.60775 32.999,26.42875 L32.999,13.00075 C32.999,12.81675 32.898,12.64875 32.737,12.56075 L32.737,12.56075 Z M21,26.66375 L21,19.79275 L26,16.90275 L26,23.97675 L21,26.66375 Z M15,16.90275 L20,19.79275 L20,26.66375 L15,23.97675 L15,16.90275 Z M20.5,13.61875 L25.258,16.17675 L20.5,18.92675 L15.742,16.17675 L20.5,13.61875 Z M26.736,15.83575 L20.736,12.61175 C20.59,12.53275 20.41,12.53275 20.264,12.61175 L14.264,15.83575 C14.102,15.92275 14,16.09175 14,16.27575 L14,24.27575 C14,24.45975 14.102,24.62975 14.264,24.71675 L20.264,27.94075 C20.337,27.98075 20.419,28.00075 20.5,28.00075 C20.581,28.00075 20.663,27.98075 20.736,27.94075 L26.736,24.71675 C26.898,24.62975 27,24.45975 27,24.27575 L27,16.27575 C27,16.09175 26.898,15.92275 26.736,15.83575 L26.736,15.83575 Z" id="AWS-Tools-and-SDKs_Icon_32_Squid" fill="#FFFFFF"></path>
      </g>
  </svg>
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
  <?xml version="1.0" encoding="UTF-8"?>
  <svg width="150px" height="auto" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <title>Icon-Architecture/32/Arch_AWS-CloudShell_32</title>
      <g id="Icon-Architecture/32/Arch_AWS-CloudShell_32" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Icon-Architecture-BG/32/Developer-Tools" fill="#C925D1">
              <rect id="Rectangle" x="0" y="0" width="40" height="40"></rect>
          </g>
          <g id="Icon-Service/32/AWS-CloudShell_32" transform="translate(6.500000, 6.710000)" fill="#FFFFFF">
              <path d="M17.5,23.2910633 L23.5,23.2910633 L23.5,22.2910633 L17.5,22.2910633 L17.5,23.2910633 Z M12.354,23.1450633 L16.354,19.1450633 C16.549,18.9490633 16.549,18.6330633 16.354,18.4370633 L12.354,14.4370633 L11.647,15.1450633 L15.293,18.7910633 L11.647,22.4370633 L12.354,23.1450633 Z M7.5,26.2910633 L26.5,26.2910633 L26.5,11.2910633 L7.5,11.2910633 L7.5,26.2910633 Z M27.5,10.7910633 L27.5,26.7910633 C27.5,27.0670633 27.276,27.2910633 27,27.2910633 L7,27.2910633 C6.724,27.2910633 6.5,27.0670633 6.5,26.7910633 L6.5,10.7910633 C6.5,10.5150633 6.724,10.2910633 7,10.2910633 L27,10.2910633 C27.276,10.2910633 27.5,10.5150633 27.5,10.7910633 L27.5,10.7910633 Z M5.678,1.34006327 C4.38,1.89206327 3.363,3.48206327 3.363,4.96106327 L3.395,5.48406327 C3.408,5.72306327 3.252,5.93806327 3.021,5.99806327 C2.266,6.19106327 1,6.78906327 1,8.60806327 C1,9.98006327 1.742,10.7370633 2.364,11.1300633 C2.44,11.1720633 2.766,11.2520633 3.043,11.2970633 L4.5,11.2910633 L4.5,12.2910633 L2.963,12.2910633 C2.655,12.2480633 2.098,12.1440633 1.831,11.9760633 C1.147,11.5440633 1.77635684e-15,10.5320633 1.77635684e-15,8.60806327 C1.77635684e-15,6.95506327 0.879,5.68906327 2.373,5.15106327 L2.364,4.99006327 C2.363,3.08006327 3.62,1.12806327 5.287,0.420063271 C7.236,-0.407936729 9.306,0.0030632712 10.814,1.52106327 C11.233,1.94306327 11.585,2.44506327 11.864,3.02006327 C12.459,2.61306327 13.218,2.49106327 13.924,2.72406327 C14.882,3.03806327 15.489,3.89606327 15.595,5.05306327 C16.25,5.22706327 17.259,5.63706327 17.899,6.58606327 C18.288,7.16306327 18.485,7.85206327 18.485,8.63506327 L17.485,8.63506327 C17.485,8.05506327 17.346,7.55306327 17.07,7.14506327 C16.489,6.28506327 15.443,6.02306327 15.021,5.95006327 C14.75,5.90306327 14.567,5.64706327 14.612,5.37606327 C14.611,4.52006327 14.247,3.88206327 13.612,3.67406327 C13.053,3.49006327 12.44,3.69306327 12.084,4.17906327 C11.975,4.32806327 11.79,4.40206327 11.608,4.37706327 C11.425,4.35006327 11.272,4.22406327 11.21,4.04906327 C10.952,3.31706327 10.58,2.70406327 10.106,2.22706327 C9.523,1.64206327 7.928,0.385063271 5.678,1.34006327 L5.678,1.34006327 Z" id="Fill-3"></path>
          </g>
      </g>
  </svg>
</div>

- AWS CloudShell is a browser-based shell that makes it easy to securely manage, explore, and interact with your AWS resources
- Provides a pre-authenticated AWS Command Line Interface (CLI) environment
- No need to install or configure anything
- Access to AWS services and resources using the AWS CLI, AWS SDKs, and other command-line tools
- Persistent storage of 1 GB for each user, allowing you to save scripts, files, and configurations across sessions
- Supports multiple AWS regions, allowing you to work with resources in different regions without needing to reconfigure your CLI
- Integrated with AWS Identity and Access Management (IAM), allowing you to use your existing IAM permissions to access AWS resources securely
