# CloudmersiveVirusApiClient.WebsiteScanResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cleanResult** | **Boolean** | True if the scan contained no threats, false otherwise | [optional] 
**websiteThreatType** | **String** | Type of threat returned; can be None, Malware, ForcedDownload or Phishing | [optional] 
**foundViruses** | [**[VirusFound]**](VirusFound.md) | Array of viruses found, if any | [optional] 


<a name="WebsiteThreatTypeEnum"></a>
## Enum: WebsiteThreatTypeEnum


* `None` (value: `"None"`)

* `Malware` (value: `"Malware"`)

* `Phishing` (value: `"Phishing"`)

* `ForcedDownload` (value: `"ForcedDownload"`)

* `UnableToConnect` (value: `"UnableToConnect"`)




