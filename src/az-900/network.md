# Network

## Virtual Networks

<div style="text-align: center;">
  <img src="../images/az-900/Icons/networking/10061-icon-service-Virtual-Networks.svg" alt="Azure Virtual Networks" style="width:150px; height:auto;" />
</div>

Virtual netwroks are assigned an address space of either IPv4 or IPv6 addresses or both. These are private addresses, which cannot be accessed from outside of Azure or other networks inside of Azure.

## Subnets

<div style="text-align: center;">
  <img src="../images/az-900/Icons/networking/02742-icon-service-Subnet.svg" alt="Azure Subnet" style="width:150px; height:auto;" />
</div>

All VNets are suubdivided into one or more subnets. The subnet is assigned a range of IP addresses which must exist in the address space of the parent VNet. All virtual machines must belong to at least one subnet, using a Network Interface card (NIC).

## Network Security Group

<div style="text-align: center;">
  <img src="../images/az-900/Icons/networking/10067-icon-service-Network-Security-Groups.svg" alt="Azure Network Security Groups" style="width:150px; height:auto;" />
</div>

An access control list (ACL) that block traffic inbound and outbound from a subnet unless it matches certain rules. The rules are based on source IP, source port, destination IP, destination port and protocol.

## Peerings

<div style="text-align: center;">
  <img src="../images/az-900/Icons/other/01285-icon-service-Peerings.svg" alt="Azure Peerings" style="width:150px; height:auto;" />
</div>

Communication is blocked between two subnets in different networks. Connecting two subnets together is called peering. This allows communication between a VM on one network an a VM on a different network.

## DNS

<div style="text-align: center;">
  <img src="../images/az-900/Icons/networking/10064-icon-service-DNS-Zones.svg" alt="Azure DNS" style="width:150px; height:auto;" />
</div>

DBS stands for Domain Name System. You can give your IP addresses names using DNS. Only applies internally to Azure to applied networks.

## Virtual Network Gateways

<div style="text-align: center;">
  <img src="../images/az-900/Icons/networking/10063-icon-service-Virtual-Network-Gateways.svg" alt="Azure Virtual Network Gateways" style="width:150px; height:auto;" />
</div>

VPN is a virtual private network. Allows communication between a workstation and a network, or between two networks. Encrypts traffic between two points.

## ExpressRoute

<div style="text-align: center;">
  <img src="../images/az-900/Icons/networking/10079-icon-service-ExpressRoute-Circuits.svg" alt="Azure ExpressRoute" style="width:150px; height:auto;" />
</div>

If communicating into Azure at high speeds is important for you, you might want to look into ExpressRoute. A private connection from you ISP to an Azure endpoint.
