# Network

## Table of Contents

- [Azure VNet](#azure-vnet)
- [Azure Subnets](#azure-subnets)
- [Azure Network Interface (NIC)](#azure-network-interface-nic)
- [Azure Network Security Groups](#azure-network-security-groups-nsg)
- [Azure Virtual Network Peering](#azure-virtual-network-peering)
- [Azure DNS](#azure-dns)
- [Azure ExpressRoute](#azure-expressroute)
- [Azure Virtual Network Gateways](#azure-virtual-network-gateways)
- [Azure Load Balancer](#azure-load-balancer)
- [Azure Application Gateway](#azure-application-gateway)
- [Azure Front Door](#azure-front-door)
- [Azure Private Link](#azure-private-link)
- [Azure Bastion](#azure-bastion)

## Azure VNet

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10061-icon-service-Virtual-Networks.svg" alt="Azure Virtual Network" style="width:150px; height:auto;" />
</div>

- **Purpose**: Fundamental building block for private networking in Azure.
- **Key Capabilities**:
  - Isolated network segments within Azure.
  - Subnets for segmented network design.
  - Network security boundaries and controls.
- **Typical Use Cases**:
  - Host Azure resources securely.
  - Extend on-premises networks to the cloud.
  - Control inbound and outbound traffic routing.

## Azure Subnets

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/02742-icon-service-Subnet.svg" alt="Azure Subnet" style="width:150px; height:auto;" />
</div>

- **Purpose**: Logical subdivisions of an Azure VNet for resource segmentation.
- **Key Capabilities**:
  - Control network traffic routes and isolation.
  - Enforce security boundaries with Network Security Groups (NSGs).
- **Typical Use Cases**:
  - Micro-segmentation of workloads.
  - Separation of front-end, application, and database tiers.

## Azure Network Interface (NIC)

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10080-icon-service-Network-Interfaces.svg" alt="Azure Network Interfaces" style="width:150px; height:auto;" />
</div>

- **Purpose**: Connects a VM to a VNet, assigning private and/or public IP addresses.
- **Key Capabilities**:
  - One or multiple NICs per VM (dependent on VM size).
  - IP configurations for inbound/outbound traffic.
- **Typical Use Cases**:
  - Assigning multiple IP addresses to different subnets.
  - Multi-homing scenarios.

## Azure Network Security Groups (NSG)

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10067-icon-service-Network-Security-Groups.svg" alt="Azure Network Security Groups" style="width:150px; height:auto;" />
</div>

- **Purpose**: Control inbound and outbound traffic at the subnet or NIC level.
- **Key Capabilities**:
  - Rule-based filtering with priority.
  - State-aware inspection of TCP traffic.
- **Typical Use Cases**:
  - Restricting access to specific ports or protocols.
  - Filtering traffic at scale for multi-tier applications.

## Azure Virtual Network Peering

<div style="text-align: center;">
  <img src="../images/azure/Icons/other/01285-icon-service-Peerings.svg" alt="Azure Virtual Network Peering" style="width:150px; height:auto;" />
</div>

- **Purpose**: Connect two Azure VNets for direct network traffic flow.
- **Key Capabilities**:
  - Low latency, high-bandwidth interconnection.
  - No gateway or public internet traversal.
- **Typical Use Cases**:
  - Merging networks across different regions or subscriptions.
  - Multi-team or multi-environment connectivity.

## Azure DNS

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10064-icon-service-DNS-Zones.svg" alt="Azure DNS" style="width:150px; height:auto;" />
</div>

- **Purpose**: Host DNS domains and manage DNS records in Azure.
- **Key Capabilities**:
  - Internal and external DNS zone hosting.
  - Integration with Azure-based services and resources.
- **Typical Use Cases**:
  - Custom domain mapping for public-facing apps.
  - Private DNS zones for internal name resolution.

## Azure ExpressRoute

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10079-icon-service-ExpressRoute-Circuits.svg" alt="Azure ExpressRoute" style="width:150px; height:auto;" />
</div>

- **Purpose**: Dedicated private connection from on-premises networks to Azure.
- **Key Capabilities**:
  - Higher security, reliability, and speed than typical VPN.
  - Bandwidth options up to 100 Gbps.
- **Typical Use Cases**:
  - High-throughput data replication.
  - Enterprise-scale hybrid connections.

## Azure Virtual Network Gateways

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10063-icon-service-Virtual-Network-Gateways.svg" alt="Azure Virtual Network Gateways" style="width:150px; height:auto;" />
</div>

- **Purpose**: Provide gateways for VPN or ExpressRoute connections.
- **Key Capabilities**:
  - Configurable gateway SKUs for different throughput levels.
  - Site-to-Site, Point-to-Site, and ExpressRoute gateway options.
- **Typical Use Cases**:
  - Secure VPN tunnels to on-premises resources.
  - Hybrid cloud scenarios.

## Azure Load Balancer

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10062-icon-service-Load-Balancers.svg" alt="Azure Load Balancer" style="width:150px; height:auto;" />
</div>

- **Purpose**: Distribute network traffic across multiple VMs.
- **Key Capabilities**:
  - Layer 4 (TCP/UDP) load balancing.
  - High availability and network-level redundancy.
- **Typical Use Cases**:
  - Balancing web server workloads.
  - Ensuring high availability for backend services.

## Azure Application Gateway

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10076-icon-service-Application-Gateways.svg" alt="Azure Application Gateway" style="width:150px; height:auto;" />
</div>

- **Purpose**: Application-level (Layer 7) load balancing and web application firewall (WAF).
- **Key Capabilities**:
  - SSL offloading, session affinity, path-based routing.
  - Integrated WAF for security.
- **Typical Use Cases**:
  - Secure, scalable web application hosting.
  - Advanced traffic routing rules for microservices.

## Azure Front Door

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/10073-icon-service-Front-Door-and-CDN-Profiles.svg" alt="Azure Front Door" style="width:150px; height:auto;" />
</div>

- **Purpose**: Global, scalable entry point for web applications with intelligent routing.
- **Key Capabilities**:
  - Layer 7 reverse proxy with edge computing capabilities.
  - Global load balancing, caching, SSL offloading.
- **Typical Use Cases**:
  - Distributing traffic across multiple regions.
  - Accelerated content delivery with edge POPs.

## Azure Private Link

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/00427-icon-service-Private-Link.svg" alt="Azure Private Link" style="width:150px; height:auto;" />
</div>

- **Purpose**: Securely connect services within Azure over a private endpoint.
- **Key Capabilities**:
  - Private connectivity to Azure PaaS services (e.g., Storage, SQL).
  - Eliminates exposure to public internet.
- **Typical Use Cases**:
  - High-security networks with restricted internet access.
  - Compliance with strict data governance requirements.

## Azure Bastion

<div style="text-align: center;">
  <img src="../images/azure/Icons/networking/02422-icon-service-Bastions.svg" alt="Azure Bastion" style="width:150px; height:auto;" />
</div>

- **Purpose**: Securely connect to Azure VMs without public IP addresses.
- **Key Capabilities**:
  - Browser-based RDP/SSH over SSL.
  - Fully managed PaaS service in the Azure portal.
- **Typical Use Cases**:
  - Remote administration of VMs in a locked-down network.
  - Enforcing just-in-time access without exposing RDP/SSH ports publicly.
