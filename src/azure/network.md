# Network

## Azure Virtual Network

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10061-icon-service-Virtual-Networks.svg" alt="Azure Virtual Network" style="width:150px; height:auto;" />
</div>

Azure Virtual Network (VNet) is the fundamental building block for your private network in Azure. It enables Azure resources like virtual machines (VMs) to securely communicate with each other, the internet, and on-premises networks. VNets support various functionalities, including segmentation through subnets, traffic filtering with network security groups, and routing customization. They also facilitate communication between Azure resources, integration with Azure services, and hybrid connectivity with on-premises environments.

## Azure Subnets

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/02742-icon-service-Subnet.svg" alt="Azure Subnet" style="width:150px; height:auto;" />
</div>

Subnets are subdivisions within a VNet that allow you to segment your network into smaller, manageable sections. By organizing resources into subnets, you can apply granular security policies and route network traffic efficiently. Each subnet contains a range of IP addresses and can be associated with network security groups and route tables to control traffic flow. This segmentation enhances security and enables better management of network traffic within the VNet.

## Azure Network Security Groups

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10067-icon-service-Network-Security-Groups.svg" alt="Azure Network Security Groups" style="width:150px; height:auto;" />
</div>

Network Security Groups (NSGs) are used to filter network traffic to and from Azure resources within a VNet. They contain security rules that allow or deny inbound and outbound traffic based on factors like source and destination IP addresses, ports, and protocols. By associating NSGs with subnets or individual network interfaces, you can control access to resources, enhancing the security posture of your applications.

## Azure Virtual Network Peering

<div style="text-align: center;">
  <img src="../images/azure/Icons/other/01285-icon-service-Peerings.svg" alt="Azure Virtual Network Peering" style="width:150px; height:auto;" />
</div>

Virtual Network Peering enables you to seamlessly connect two or more VNets in Azure, allowing them to function as a single network for connectivity purposes. The traffic between peered VNets is routed through the Microsoft backbone infrastructure, ensuring low-latency and high-bandwidth connectivity without traversing the public internet. Peering can be established within the same region or across different regions (global peering), facilitating resource sharing and centralized management across VNets.

## Azure DNS

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10064-icon-service-DNS-Zones.svg" alt="Azure DNS" style="width:150px; height:auto;" />
</div>

Azure DNS is a hosting service for DNS domains, providing name resolution using Microsoft Azure infrastructure. By hosting your domains in Azure, you can manage your DNS records using the same credentials, APIs, tools, and billing as your other Azure services. Azure DNS supports all common DNS record types and integrates seamlessly with other Azure services, offering high availability and fast performance.

## Azure ExpressRoute

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10079-icon-service-ExpressRoute-Circuits.svg" alt="Azure ExpressRoute" style="width:150px; height:auto;" />
</div>

Azure ExpressRoute enables you to extend your on-premises networks into the Microsoft cloud over a private connection facilitated by a connectivity provider. With ExpressRoute, you can establish connections to Microsoft cloud services, such as Azure and Microsoft 365, without routing traffic over the public internet. This private connection offers enhanced security, reliability, and consistent performance, making it ideal for scenarios that require secure and high-throughput connections between on-premises infrastructure and Azure resources.

## Azure Virtual Network Gateways

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10063-icon-service-Virtual-Network-Gateways.svg" alt="Azure Virtual Network Gateways" style="width:150px; height:auto;" />
</div>

A Virtual Network Gateway is a specific type of virtual network gateway that is used to send network traffic on a private connection. This type of gateway is used when you're configuring ExpressRoute. Each virtual network can have only one virtual network gateway per gateway type. For example, you can have one virtual network gateway that uses 'Vpn' for '-GatewayType', and one that uses 'ExpressRoute' for '-GatewayType'.

## Azure Load Balancer

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10062-icon-service-Load-Balancers.svg" alt="Azure Load Balancer" style="width:150px; height:auto;" />
</div>

Azure Load Balancer is a Layer 4 (TCP, UDP) load balancer that distributes incoming network traffic across multiple virtual machines or services to ensure high availability and reliability. It supports both public and internal load balancing, enabling you to scale your applications and create highly available services. Load Balancer provides low-latency and high-throughput, handling millions of requests per second while ensuring your applications remain responsive. It also offers health monitoring to automatically remove unhealthy instances from the load-balancing rotation.

## Azure Application Gateway

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10076-icon-service-Application-Gateways.svg" alt="Azure Application Gateway" style="width:150px; height:auto;" />
</div>

Azure Application Gateway is a web traffic load balancer that operates at Layer 7 (HTTP/HTTPS) of the OSI model. It provides advanced routing capabilities, including URL-based routing, SSL termination, and Web Application Firewall (WAF) integration to protect against common web vulnerabilities. Application Gateway is ideal for managing traffic to your web applications, ensuring efficient and secure delivery of web content to users.

## Azure Front Door

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10073-icon-service-Front-Door-and-CDN-Profiles.svg" alt="Azure Front Door" style="width:150px; height:auto;" />
</div>

Azure Front Door is a scalable and secure entry point for fast delivery of your global applications. It offers Layer 7 load balancing, SSL offloading, and application acceleration through caching and dynamic site acceleration. Front Door provides global routing to ensure high availability and low latency for your applications, with built-in security features to protect against DDoS attacks and other threats.

## Azure Private Link

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/00427-icon-service-Private-Link.svg" alt="Azure Private Link" style="width:150px; height:auto;" />
</div>

Azure Private Link enables you to access Azure PaaS services (such as Azure Storage and SQL Database) and customer-owned or partner services over a private endpoint in your virtual network. This ensures that traffic between your virtual network and the service travels through the Microsoft backbone network, providing secure and private connectivity without exposing the service to the public internet. Private Link helps you maintain data privacy and compliance by keeping your data within the Azure network.

## Azure Bastion

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/02422-icon-service-Bastions.svg" alt="Azure Bastion" style="width:150px; height:auto;" />
</div>

Azure Bastion is a fully managed service that provides secure and seamless RDP and SSH access to your virtual machines directly through the Azure portal. By deploying Azure Bastion in your virtual network, you can connect to your VMs without exposing them to public IP addresses, reducing the surface area for potential attacks. This service ensures secure and reliable connectivity to your VMs over SSL, eliminating the need for a jump box or VPN.
