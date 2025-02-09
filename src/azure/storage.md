# Storage

## Azure Disks

<div style="text-align: center;">
  <img src="../images/azure/Icons/compute/10032-icon-service-Disks.svg" alt="Azure Disks" style="width:150px; height:auto;" />
</div>

Azure Disks provide block-level storage volumes for Azure Virtual Machines (VMs). They come in various performance tiers, including Standard HDD, Standard SSD, and Premium SSD, to meet different workload requirements. Managed Disks simplify disk management by handling storage account creation and management, offering features like snapshots and backup support. Disks can be resized without downtime, providing flexibility as storage needs change.

## Azure Blob Containers

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10839-icon-service-Storage-Container.svg" alt="Azure Blob Containers" style="width:150px; height:auto;" />
</div>

Azure Blob Storage is designed for storing large amounts of unstructured data, such as text or binary data. Blob Containers are logical groupings of blobs within a storage account. This service is ideal for serving images or documents directly to browsers, storing files for distributed access, streaming media, and performing secure backups. Blob Storage offers different access tiers (Hot, Cool, and Archive) to optimize storage costs based on data access patterns.

## Azure File Shares

<div style="text-align: center;">
  <img src="../images/azure/Icons/storage/10400-icon-service-Azure-Fileshares.svg" alt="Azure File Shares" style="width:150px; height:auto;" />
</div>

Azure Files provides fully managed file shares in the cloud that are accessible via the Server Message Block (SMB) and Network File System (NFS) protocols. These shares can be mounted concurrently by cloud or on-premises deployments, enabling seamless file sharing across multiple machines and applications. Azure Files is suitable for scenarios like lifting and shifting applications that rely on file shares, sharing files across business units, and replacing or supplementing on-premises file servers.

## Azure Queues

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10840-icon-service-Storage-Queue.svg" alt="Azure Queues" style="width:150px; height:auto;" />
</div>

Azure Queue Storage is a messaging service for storing large numbers of messages that can be accessed from anywhere via authenticated HTTP or HTTPS calls. It enables communication between components of distributed applications, allowing for decoupling and load leveling. Common use cases include creating a backlog of work to process asynchronously, passing messages between different parts of a cloud service, and facilitating resilience in application architectures.

## Azure Tables

<div style="text-align: center;">
  <img src="../images/azure/Icons/general/10841-icon-service-Table.svg" alt="Azure Tables" style="width:150px; height:auto;" />
</div>

Azure Table Storage is a NoSQL key-value store for rapid development using massive semi-structured datasets. It allows for quick access to large amounts of data and is ideal for applications that require flexible data schemas, such as web applications, address books, and other user data storage. Table Storage provides fast data access and is cost-effective for many types of applications.

## Azure Data Box

<div style="text-align: center;">
  <img src="../images/azure/Icons/storage/10094-icon-service-Data-Box.svg" alt="Azure Data Box" style="width:150px; height:auto;" />
</div>

Azure Data Box is a service that enables the transfer of large amounts of data to Azure in a secure and efficient manner. It provides physical devices that can be shipped to your data center, allowing you to load data locally and then ship the device back to Azure for uploading. This is particularly useful for data migrations, disaster recovery, and content distribution when transferring data over the network is not feasible due to bandwidth or time constraints.

## Azure Data Lake Storage

<div style="text-align: center;">
  <img src="../images/azure/Icons/storage/10090-icon-service-Data-Lake-Storage-Gen1.svg" alt="Azure Data Lake Storage" style="width:150px; height:auto;" />
</div>

Azure Data Lake Storage is a scalable and secure data lake for high-performance analytics workloads. It combines the scalability and cost benefits of object storage with the reliability and performance of the Big Data file system capabilities. This service is optimized for analytics and is compatible with Hadoop Distributed File System (HDFS), making it suitable for big data analytics, machine learning, and data warehousing scenarios.
