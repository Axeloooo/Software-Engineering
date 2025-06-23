# Storage

---

## Table of Contents

- [Azure Disks](#azure-disks)
- [Azure Blob Containers](#azure-blob-containers)
- [Azure File Shares](#azure-file-shares)
- [Azure Queues](#azure-queues)
- [Azure Tables](#azure-tables)
- [Azure Data Box](#azure-data-box)
- [Azure Data Lake Storage](#azure-data-lake-storage)

---

## Azure Disks

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10032-icon-service-Disks.svg" alt="Azure Disks" style="width:150px; height:auto;" />
</div>

- **Purpose**: Persistent storage for Azure VMs.
- **Key Capabilities**:
  - Managed or unmanaged disk options.
  - Different performance tiers (Standard HDD, Standard SSD, Premium SSD, Ultra Disk).
- **Typical Use Cases**:
  - VM operating system and data disks.
  - High-performance storage for I/O-intensive workloads.

---

## Azure Blob Containers

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10839-icon-service-Storage-Container.svg" alt="Azure Blob Containers" style="width:150px; height:auto;" />
</div>

- **Purpose**: Object storage solution for unstructured data.
- **Key Capabilities**:
  - Hot, Cool, and Archive tiers for cost optimization.
  - Scalable, cost-effective data storage for images, videos, backups.
- **Typical Use Cases**:
  - Data lake storage for analytics.
  - Media content delivery.
  - Backup and disaster recovery.

---

## Azure File Shares

<div style="text-align: center;">
  <img src="../images/azure/Icons/storage/10400-icon-service-Azure-Fileshares.svg" alt="Azure File Shares" style="width:150px; height:auto;" />
</div>

- **Purpose**: Fully managed file share service using the SMB or NFS protocol.
- **Key Capabilities**:
  - Shared file access across multiple VMs or on-premises.
  - Integration with Active Directory for access control.
- **Typical Use Cases**:
  - Lift-and-shift legacy applications that use file shares.
  - Centralized file storage and collaboration.

---

## Azure Queues

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10840-icon-service-Storage-Queue.svg" alt="Azure Queues" style="width:150px; height:auto;" />
</div>

- **Purpose**: Messaging service for decoupling and scaling application components.
- **Key Capabilities**:
  - Simple, asynchronous message queue.
  - Durable storage of messages.
- **Typical Use Cases**:
  - Microservices communication.
  - Asynchronous task processing.

---

## Azure Tables

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10841-icon-service-Table.svg" alt="Azure Tables" style="width:150px; height:auto;" />
</div>

- **Purpose**: NoSQL key-value store for high-volume data.
- **Key Capabilities**:
  - Schemaless design.
  - Scalable and cost-effective for large datasets.
- **Typical Use Cases**:
  - IoT data ingestion.
  - Storing user profiles or session data.

---

## Azure Data Box

<div style="text-align: center;">
  <img src="../images/azure/Icons/storage/10094-icon-service-Data-Box.svg" alt="Azure Data Box" style="width:150px; height:auto;" />
</div>

- **Purpose**: Physical devices to securely transfer large amounts of data to Azure.
- **Key Capabilities**:
  - Various device sizes and types.
  - Encryption in transit and at rest.
- **Typical Use Cases**:
  - One-time data migration or bulk data import.
  - Offline data transfer when network bandwidth is limited.

---

## Azure Data Lake Storage

<div style="text-align: center;">
  <img src="../images/azure/Icons/storage/10090-icon-service-Data-Lake-Storage-Gen1.svg" alt="Azure Data Lake Storage" style="width:150px; height:auto;" />
</div>

- **Purpose**: Hyperscale repository for big data analytics workloads.
- **Key Capabilities**:
  - High-performance, hierarchical file system for analytics.
  - Integration with Azure analytics services (Databricks, Synapse).
- **Typical Use Cases**:
  - Data lake for enterprise analytics pipelines.
  - Big data processing and machine learning.
