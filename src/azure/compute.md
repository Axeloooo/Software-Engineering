# Compute

## Table of Contents

- [Azure Virtual Machines](#azure-virtual-machines)
- [Azure Virtual Machine Scale Sets](#azure-virtual-machine-scale-sets)
- [Azure App Service](#azure-app-service)
- [Azure Kubernetes Service (AKS)](#azure-kubernetes-service-aks)
- [Azure Virtual Desktop](#azure-virtual-desktop)
- [Azure Functions](#azure-functions)
- [Azure Container Instances (ACI)](#azure-container-instances-aci)
- [Azure Batch](#azure-batch)

## Azure Virtual Machines

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10021-icon-service-Virtual-Machine.svg" alt="Azure Virtual Machines" style="width:150px; height:auto;" />
</div>

- **Purpose**: On-demand, scalable computing resources in the cloud.
- **Key Capabilities**:
  - Wide range of VM sizes, regions, and OS options (Windows, Linux).
  - Support for custom images and templates.
  - Integration with Virtual Networks, storage, and other Azure services.
- **Typical Use Cases**:
  - Lift-and-shift of existing applications to the cloud.
  - Development and testing environments.
  - Host custom software and workloads.

## Azure Virtual Machine Scale Sets

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10034-icon-service-VM-Scale-Sets.svg" alt="Azure Virtual Machine Scale Sets" style="width:150px; height:auto;" />
</div>

- **Purpose**: Automatically scale virtual machines to handle demand changes.
- **Key Capabilities**:
  - Automatic VM provisioning and de-provisioning.
  - Load balancing integrations.
  - Uniform or flexible orchestration modes.
- **Typical Use Cases**:
  - Large-scale compute clusters.
  - Stateless web tiers with variable traffic.
  - Big data and containerized workloads.

## Azure App Service

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10035-icon-service-App-Services.svg" alt="Azure App Service" style="width:150px; height:auto;" />
</div>

- **Purpose**: Fully managed platform for building, deploying, and scaling web apps and APIs.
- **Key Capabilities**:
  - Supports multiple languages and frameworks (e.g., .NET, Node.js, Python, Java).
  - Continuous integration and deployment (CI/CD).
  - Built-in autoscaling, monitoring, and security features.
- **Typical Use Cases**:
  - Enterprise web applications
  - RESTful API hosting
  - Minimal management overhead for web deployments

## Azure Kubernetes Service (AKS)

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10023-icon-service-Kubernetes-Services.svg" alt="Azure Kubernetes Service" style="width:150px; height:auto;" />
</div>

- **Purpose**: Managed Kubernetes service to run containerized applications at scale.
- **Key Capabilities**:
  - Automated provisioning and cluster management.
  - Integration with Azure Container Registry (ACR) for container images.
  - Autoscaling, rolling updates, and built-in monitoring.
- **Typical Use Cases**:
  - Microservices-based architectures.
  - Container orchestration for development and production.
  - Hybrid and multi-cloud strategies (with Azure Arc).

## Azure Virtual Desktop

<div style="text-align: center;">
  <img src="../images/azure/Icons/other/00327-icon-service-Azure-Virtual-Desktop.svg" alt="Azure Virtual Desktop" style="width:150px; height:auto;" />
</div>

- **Purpose**: Provide Windows 10/11 desktops and apps in the cloud.
- **Key Capabilities**:
  - Multi-session Windows 10/11 environment.
  - Optimizations for Microsoft 365 Apps.
  - Integration with Azure Active Directory (Microsoft Entra ID).
- **Typical Use Cases**:
  - Remote work scenarios.
  - Secure access to corporate desktops and applications.
  - Disaster recovery for on-premises desktop environments.

## Azure Functions

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10029-icon-service-Function-Apps.svg" alt="Azure Functions" style="width:150px; height:auto;" />
</div>

- **Purpose**: Serverless compute platform for event-driven, on-demand code execution.
- **Key Capabilities**:
  - Pay-per-execution billing model (consumption plan).
  - Triggers and bindings to integrate with other Azure services.
  - Built-in scaling and managed infrastructure.
- **Typical Use Cases**:
  - Real-time file processing
  - IoT data processing
  - Webhooks and microservices

## Azure Container Instances (ACI)

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10104-icon-service-Container-Instances.svg" alt="Azure Container Instances" style="width:150px; height:auto;" />
</div>

- **Purpose**: Run containers without managing servers or clusters.
- **Key Capabilities**:
  - Fast, isolated compute for containerized workloads.
  - Per-second billing.
  - Integrates with Virtual Networks for secure deployments.
- **Typical Use Cases**:
  - Batch processing
  - Test and development containers
  - Event-driven container workloads

## Azure Batch

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10031-icon-service-Batch-Accounts.svg" alt="Azure Batch" style="width:150px; height:auto;" />
</div>

- **Purpose**: Large-scale parallel and high-performance computing (HPC) in the cloud.
- **Key Capabilities**:
  - Automatically manage and scale compute nodes.
  - Integration with Azure Storage for input/output data.
  - Supports Docker containers and common HPC frameworks.
- **Typical Use Cases**:
  - Rendering 3D images or simulations
  - Financial risk modeling
  - Genomic and scientific research
