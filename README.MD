# Example for an Azure Function Retrieving Weather Data

A simple example to retrieve data from openweathermap.org API.  

This example was created using the Azure extensions for VSC.  
In order to deploy the example you need an Azure account.  

I´ve created this example following these instructions:
https://docs.microsoft.com/en-us/azure/azure-functions/  
  
Steps:  
1. Clone this repo  
2. Install the Azure extension Azure Functions in VSC  
3. In Azure functions create a new project and then a new function  
4. Deploy the function to function app  

Before deploying you can try locally when you have "func" installed:  
https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=windows%2Ccsharp%2Cbash  
  
  
Once the app the deployed you need to install the axios node module.  
You can do that on the Kudu page using https://appname.scm.azurewebsites.net by using Debug tools / CMD.  

The under application settings add your WEATHERAPIKEY like in your environment.  

