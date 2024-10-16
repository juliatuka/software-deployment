# Lab1: ARM Template Deployment

This project contains an ARM template to deploy an Azure Storage Account and an Azure Web App using the Free Tier.

## Files

- `azuredeploy.json`: The ARM template that defines the resources.
- `azuredeploy.parameters.json`: A separate parameters file for providing input values during deployment.
- `README.md`: This file, which contains instructions on how to use the template.

## Parameters

- `storageAccountName`: The name of the Azure Storage Account.
- `location`: The Azure region where the resources will be deployed.
- `webAppName`: The name of the Azure Web App.

## How to Deploy the Template

To deploy this ARM template using the Azure CLI, follow these steps:

1. `Log in to Azure`:
   ```bash
   az login
   ```

2. `Create a resource group` (if you don't have one already):
   ```bash
   az group create --name MyResourceGroup --location MyLocation
   ```
3. `Deploy the template with the parameters file`:

   To deploy the ARM template using both the template file and the parameters file, you can use this Azure CLI command:

   ```bash
   az deployment group create \
      --resource-group MyResourceGroup \
      --template-file azuredeploy.json \
      --parameters storageAccountName=myuniquestorageacct webAppName=myuniquewebapp
   ```
