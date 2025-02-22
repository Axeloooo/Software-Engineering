# Management and Governance

## Table of Contents

- [Azure Subscriptions](#azure-subscriptions)
- [Azure Management Groups](#azure-management-groups)
- [Azure Policy](#azure-policy)
- [Azure Blueprints](#azure-blueprints)
- [Azure Resource Groups](#azure-resource-groups)
- [Azure Tags](#azure-tags)
- [Azure Arc](#azure-arc)
- [Azure Resource Manager (ARM) Templates](#azure-resource-manager-arm-templates)
- [Azure Purview](#azure-purview)
- [Azure Advisor](#azure-advisor)

## Azure Subscriptions

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10002-icon-service-Subscriptions.svg" alt="Azure Subscription" style="width:150px; height:auto;" />
</div>

- **Purpose**: Logical container for Azure resources, billing, and usage.
- **Key Capabilities**:
  - Payment and billing boundary.
  - Resource access and usage quotas.
  - Linked to Azure Active Directory tenant.
- **Typical Use Cases**:
  - Organizing workloads by department or project.
  - Enforcing budgetary constraints and spending thresholds.

## Azure Management Groups

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10011-icon-service-Management-Groups.svg" alt="Azure Management Groups" style="width:150px; height:auto;" />
</div>

- **Purpose**: Hierarchical grouping of subscriptions for organizational governance.
- **Key Capabilities**:
  - Apply policies and access controls across multiple subscriptions.
  - Organize subscriptions by departments, regions, or functions.
- **Typical Use Cases**:
  - Enterprise-wide compliance policies
  - Consistent resource governance

## Azure Policy

<div style="text-align: center;">
  <img src="../images/azure/Icons/management + governance/10316-icon-service-Policy.svg" alt="Azure Policy" style="width:150px; height:auto;" />
</div>

- **Purpose**: Enforce compliance and governance across resources.
- **Key Capabilities**:
  - Policy assignments for resource configurations (e.g., allowed regions, tag requirements).
  - Monitoring and remediation of non-compliant resources.
- **Typical Use Cases**:
  - Regulatory compliance (e.g., ISO, PCI).
  - Resource standardization and cost control.

## Azure Blueprints

<div style="text-align: center;">
  <img src="../images/azure/Icons/management + governance/00006-icon-service-Blueprints.svg" alt="Azure Blueprints" style="width:150px; height:auto;" />
</div>

- **Purpose**: Package and deploy sets of resource templates and policies at scale.
- **Key Capabilities**:
  - Create repeatable environments with ARM templates, policies, and RBAC.
  - Versioning for consistent environment deployments.
- **Typical Use Cases**:
  - Enterprise environment setup
  - Standardized development/test/production deployments

## Azure Resource Groups

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10007-icon-service-Resource-Groups.svg" alt="Azure Resource Groups" style="width:150px; height:auto;" />
</div>

- **Purpose**: Logical grouping of Azure resources for management, deployment, and monitoring.
- **Key Capabilities**:
  - All resources in a group share a common lifecycle.
  - Role-based access control at the resource group level.
- **Typical Use Cases**:
  - Grouping related resources for an application.
  - Easier deployment and deletion of entire stacks.

## Azure Tags

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10842-icon-service-Tags.svg" alt="Azure Tags" style="width:150px; height:auto;" />
</div>

- **Purpose**: Metadata labels to categorize resources (e.g., cost center, environment).
- **Key Capabilities**:
  - Use tags for resource organization and cost allocation.
  - Query resources by tags in Azure Portal and CLI.
- **Typical Use Cases**:
  - Cost management and chargeback.
  - Resource discovery and governance.

## Azure Arc

<div style="text-align: center;">
  <img src="../images/azure/Icons/management + governance/00756-icon-service-Azure-Arc.svg" alt="Azure Arc" style="width:150px; height:auto;" />
</div>

- **Purpose**: Extend Azure management and services to on-premises, multi-cloud, and edge environments.
- **Key Capabilities**:
  - Manage servers, Kubernetes clusters, and data services anywhere.
  - Consistent policy enforcement and governance outside Azure.
- **Typical Use Cases**:
  - Hybrid cloud strategies
  - Central management across diverse environments

## Azure Resource Manager (ARM) Templates

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10009-icon-service-Templates.svg" alt="Azure Templates" style="width:150px; height:auto;" />
</div>

- **Purpose**: Infrastructure-as-Code for deploying and managing Azure resources declaratively.
- **Key Capabilities**:
  - JSON-based templates to define infrastructure configurations.
  - Parameterization for dynamic deployments.
  - Consistent, repeatable environment provisioning.
- **Typical Use Cases**:
  - Automated deployments with CI/CD.
  - Version-controlled infrastructure configurations.

## Azure Purview

<div style="text-align: center;">
  <img src="../images/azure/Icons/databases/02517-icon-service-Azure-Purview-Accounts.svg" alt="Azure Purview" style="width:150px; height:auto;" />
</div>

- **Purpose**: Unified data governance service to manage and control data across on-premises, multi-cloud, and SaaS sources.
- **Key Capabilities**:
  - Automated data discovery and classification.
  - Data lineage for end-to-end tracking.
  - Built-in data catalog for enterprise-wide data visibility.
- **Typical Use Cases**:
  - Regulatory compliance (e.g., GDPR).
  - Centralized data governance and discovery.
  - Enterprise-wide data cataloging.

## Azure Advisor

<div style="text-align: center;">
  <img src="../images/azure/Icons/management + governance/00003-icon-service-Advisor.svg" alt="Azure Advisor" style="width:150px; height:auto;" />
</div>

- **Purpose**: Personalized recommendations for best practices, cost optimization, performance, and security.
- **Key Capabilities**:
  - Identifies idle resources, performance bottlenecks, and potential security risks.
  - Recommends corrective actions.
- **Typical Use Cases**:
  - Ongoing cost optimization.
  - Performance tuning and reliability improvements.
  - Security posture assessments.
