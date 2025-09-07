# CloudmersiveVirusApiClient.AdditionalAdvancedScanInformation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContainsJSON** | **Boolean** | True if the input file contains JSON data, false otherwise; this is not a threat signal | [optional] 
**ContainsXML** | **Boolean** | True if the input file contains XML data, false otherwise; this is not a threat signal | [optional] 
**ContainsImage** | **Boolean** | True if the input file contains an image | [optional] 
**Hash_SHA1** | **String** | SHA1 hash of input file | [optional] 
**RelevantSubfileName** | **String** | Relevant subfile name in an archive format for identified threats, if any | [optional] 
**RelevantSubfileHash_SHA1** | **String** | SHA1 hash of relevant subfile name in an archive format for identified threats, if any | [optional] 
**IsAuthenticodeSigned** | **Boolean** | True if there is a valid Authenticode signature, False otherwise | [optional] 


