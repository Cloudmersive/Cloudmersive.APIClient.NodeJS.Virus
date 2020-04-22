# cloudmersive-virus-api-client

CloudmersiveVirusApiClient - JavaScript client for cloudmersive-virus-api-client
The Cloudmersive Virus Scan API lets you scan files and content for viruses and identify security issues with content.
[Cloudmersive Virus Scan API](https://www.cloudmersive.com/virus-api) provides advanced virus scanning capabilities.

- API version: v1
- Package version: 1.1.7


## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-virus-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-virus-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-virus-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveVirusApiClient = require('cloudmersive-virus-api-client');

var defaultClient = CloudmersiveVirusApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveVirusApiClient.ScanApi()

var inputFile = "/path/to/file.txt"; // {File} Input file to perform the operation on.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.scanFile(inputFile, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveVirusApiClient.ScanApi* | [**scanFile**](docs/ScanApi.md#scanFile) | **POST** /virus/scan/file | Scan a file for viruses
*CloudmersiveVirusApiClient.ScanApi* | [**scanFileAdvanced**](docs/ScanApi.md#scanFileAdvanced) | **POST** /virus/scan/file/advanced | Advanced Scan a file for viruses
*CloudmersiveVirusApiClient.ScanApi* | [**scanWebsite**](docs/ScanApi.md#scanWebsite) | **POST** /virus/scan/website | Scan a website for malicious content and threats


## Documentation for Models

 - [CloudmersiveVirusApiClient.VirusFound](docs/VirusFound.md)
 - [CloudmersiveVirusApiClient.VirusScanAdvancedResult](docs/VirusScanAdvancedResult.md)
 - [CloudmersiveVirusApiClient.VirusScanResult](docs/VirusScanResult.md)
 - [CloudmersiveVirusApiClient.WebsiteScanRequest](docs/WebsiteScanRequest.md)
 - [CloudmersiveVirusApiClient.WebsiteScanResult](docs/WebsiteScanResult.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

