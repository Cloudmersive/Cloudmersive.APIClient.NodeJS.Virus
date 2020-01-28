# CloudmersiveVirusApiClient.WebsiteScanResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanResult** | **Boolean** | True if the scan contained no threats, false otherwise | [optional] 
**websiteThreatType** | **String** | Type of threat returned; can be None, Malware, ForcedDownload or Phishing | [optional] 
**foundViruses** | [**[VirusFound]**](VirusFound.md) | Array of viruses found, if any | [optional] 
**websiteHttpResponseCode** | **Number** | The remote server URL HTTP reasponse code; useful for debugging issues with scanning; typically if the remote server returns a 200 or 300-series code this means a successful response, while a 400 or 500 series code would represent an error returned from the remote server for the provided URL. | [optional] 


<a name="WebsiteThreatTypeEnum"></a>
## Enum: WebsiteThreatTypeEnum


* `None` (value: `"None"`)

* `Malware` (value: `"Malware"`)

* `Phishing` (value: `"Phishing"`)

* `ForcedDownload` (value: `"ForcedDownload"`)

* `UnableToConnect` (value: `"UnableToConnect"`)




