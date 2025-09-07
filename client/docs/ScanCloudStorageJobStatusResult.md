# CloudmersiveVirusApiClient.ScanCloudStorageJobStatusResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Successful** | **Boolean** | Tru eif the operation to check the status of the job was successful, false otherwise | [optional] 
**AsyncJobStatus** | **String** | Returns the job status of the Async Job, if applicable.  Possible states are STARTED and COMPLETED | [optional] 
**AsyncJobID** | **String** | Job ID of the async batch job | [optional] 
**Result** | [**CloudStorageAdvancedVirusScanResult**](CloudStorageAdvancedVirusScanResult.md) | Output scan result, if applicable | [optional] 
**JobDuration** | **String** | Duration of a completed job | [optional] 
**ErrorMessage** | **String** | Error message (if any) | [optional] 


