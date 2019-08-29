/******************************* AWSCognitonative Plugin ***************************************/

var argscheck = require('cordova/argscheck'),
    utils = require('cordova/utils'),
    exec = require('cordova/exec');


var AWSCognitoNative = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback();
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "init", [config]);
};

AWSCognitoNative.AWSCognitoNativeEnum = {
	RegionUnknown: 0,
	UsEast1: 1,
	UsEast2: 2,
	UsWest1: 3,
	UsWest2: 4,
	ApSouth1: 5,
	ApNortheast1: 6,
	ApNortheast2: 7,
	ApSoutheast1: 8,
	ApSoutheast2: 9,
	EuCentral1: 10,
	EuWest1: 11,
	EuWest2: 12
}

AWSCognitoNative.prototype.signIn = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "signIn", [config]);
};

AWSCognitoNative.prototype.offlineSignIn = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "offlineSignIn", [config]);
};

AWSCognitoNative.prototype.signOut = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "signOut", [config]);
};

AWSCognitoNative.prototype.signUp = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "signUp", [config]);
};

AWSCognitoNative.prototype.confirmSignUp = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "confirmSignUp", [config]);
};

AWSCognitoNative.prototype.forgotPassword = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "forgotPassword", [config]);
};

AWSCognitoNative.prototype.updatePassword = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "updatePassword", [config]);
};

AWSCognitoNative.prototype.getDetails = function(config, successCallback, errorCallback) {
	cordova.exec(function(userDetails) {
		successCallback(userDetails);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "getDetails", [config]);
};

AWSCognitoNative.prototype.resendConfirmationCode = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "resendConfirmationCode", [config]);
};

AWSCognitoNative.prototype.createAWSCognitoDataset = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "createAWSCognitoDataset", [config]);
};

AWSCognitoNative.prototype.getUserDataCognitoSync = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "getUserDataCognitoSync", [config]);
};

AWSCognitoNative.prototype.setUserDataCognitoSync = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "setUserDataCognitoSync", [config]);
};

AWSCognitoNative.prototype.callAWSLambdaFunction = function(config, successCallback, errorCallback) {
	cordova.exec(function(params) {
		successCallback(params);
	},
	function(error) {
		errorCallback(error);
	}, "AWSCognitoNative", "callAWSLambdaFunction", [config]);
};

module.exports = AWSCognitoNative;
