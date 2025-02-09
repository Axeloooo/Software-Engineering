# Compute

## Azure Virtual Machines

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10021-icon-service-Virtual-Machine.svg" alt="Azure Virtual Machine" style="width:150px; height:auto;" />
</div>

Azure Virtual Machines (VMs) provide scalable, on-demand computing resources with configurable options for CPU, memory, and storage. They support various operating systems, including Windows and Linux, and are suitable for applications requiring control over the operating environment. VMs are ideal for hosting applications that need to be migrated from on-premises environments without modification, running custom software, or supporting legacy applications. Users are responsible for managing the operating system, applications, and associated configurations.

## Azure Virtual Machine Scale Sets

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10034-icon-service-VM-Scale-Sets.svg" alt="Azure Virtual Machine Scale Sets" style="width:150px; height:auto;" />
</div>

Azure Virtual Machine Scale Sets enable the deployment and management of a set of identical VMs, allowing for automatic scaling based on demand. This service ensures high availability and is ideal for large-scale applications, big data processing, and containerized workloads. Scale sets integrate with Azure Load Balancer and Azure Application Gateway to distribute traffic efficiently. They support both stateful and stateless applications, providing flexibility in managing application state and scaling.

## Azure App Service

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10035-icon-service-App-Services.svg" alt="Azure App Service" style="width:150px; height:auto;" />
</div>

Azure App Service is a fully managed platform for building, deploying, and scaling web apps, mobile app back ends, and RESTful APIs. It supports multiple programming languages, including .NET, Java, Node.js, and Python, and offers features like continuous integration and deployment, auto-scaling, and built-in security. App Service abstracts the underlying infrastructure, allowing developers to focus on application code and business logic. It's suitable for modern web applications and APIs that require a robust, scalable, and secure hosting environment.

## Azure Kubernetes Service (AKS)

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10023-icon-service-Kubernetes-Services.svg" alt="Azure Kubernetes Service" style="width:150px; height:auto;" />
</div>

Azure Kubernetes Service (AKS) is a managed container orchestration service that simplifies the deployment, management, and scaling of containerized applications using Kubernetes. AKS handles critical tasks like health monitoring and maintenance, reducing the operational overhead for developers. It integrates seamlessly with Azure DevOps and other CI/CD tools, facilitating automated deployments and updates. AKS is ideal for complex applications that require microservices architecture, scalability, and efficient resource utilization.

## Azure Virtual Desktop

<div style="text-align: center;">
  <img src="../images/azure/Icons/other/00327-icon-service-Azure-Virtual-Desktop.svg" alt="Azure Virtual Desktop" style="width:150px; height:auto;" />
</div>

Azure Virtual Desktop is a comprehensive desktop and application virtualization service running in the cloud. It enables users to access a full Windows 10 or Windows 11 desktop experience from any device, with built-in security and compliance features. Organizations can deploy and scale virtualized desktops and apps on Azure, providing remote work solutions and ensuring data remains secure within the corporate environment. Azure Virtual Desktop supports multi-session Windows 10, optimizations for Office 365, and support for Remote Desktop Services (RDS) environments.

## Azure Functions

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10029-icon-service-Function-Apps.svg" alt="Azure Functions" style="width:150px; height:auto;" />
</div>

Azure Functions is a serverless compute service that enables developers to run event-driven code without managing infrastructure. Function Apps can be triggered by various events, such as HTTP requests, timers, or messages from other Azure services. This service automatically scales to meet demand and charges only for the compute resources used during execution. It's ideal for scenarios like real-time data processing, scheduled tasks, and integrating with other services through event-driven architectures.

## Azure Container Instances (ACI)

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10104-icon-service-Container-Instances.svg" alt="Azure Container Instances" style="width:150px; height:auto;" />
</div>

Azure Container Instances provide a quick and straightforward way to run containers without managing underlying virtual machines or adopting higher-level services. ACI is ideal for scenarios that require isolated containers, such as simple applications, task automation, and build jobs. It supports both Linux and Windows containers and allows for specifying exact resource requirements, ensuring efficient utilization. ACI can be used for event-driven tasks and can integrate with other Azure services to form complex workflows.

## Azure Batch

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10031-icon-service-Batch-Accounts.svg" alt="Azure Batch" style="width:150px; height:auto;" />
</div>

Azure Batch is a managed service designed for large-scale parallel and high-performance computing (HPC) applications. It enables the execution of compute-intensive tasks across a multitude of virtual machines, handling job scheduling, auto-scaling, and node management. Batch is well-suited for scenarios like rendering, simulations, and data processing, where tasks can be distributed and processed concurrently. Developers can define jobs and tasks, and Batch will manage the execution, scaling, and retries, simplifying the orchestration of complex workloads.
