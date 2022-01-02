const Azure = require('azure');

const rsg = "eureka-jitsi-prd"
const vm = "azconvertprd-01"

var startVirtualMachine = async function(resourceGroup, vmName){
  try {
      let credential = await msRestAzure.loginWithServicePrincipalSecret(process.env.AZURE_CLIENT_ID, process.env.AZURE_APPLICATION_SECRET, process.env.AZURE_TENANT);
      computeClient = new ComputeManagementClient(credential, process.env.AZURE_SUBSCRIPTION_ID);
      await computeClient.virtualMachines.start(resourceGroup, vmName);
      return true;
  } catch (error) {
      throw error;
  }
}

startVirtualMachine(rsg, vm)