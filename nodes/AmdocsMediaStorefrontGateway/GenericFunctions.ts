import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	NodeApiError,
	NodeOperationError,
} from 'n8n-workflow';

import {
	OptionsWithUri,
} from 'request';

export async function amdocsMediaStorefrontGatewayApiRequest(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
) {
	const options: OptionsWithUri = {
		headers: {},
		method,
		body,
		qs,
		uri: uri ?? `https://ulm-stg.m1amdocs.io/storefrontgw/v1${endpoint}`,
		json: true,
	};

	const credentials = await this.getCredentials('amdocsMediaStorefrontGatewayOAuth2Api');

	if (credentials === undefined) {
		throw new NodeOperationError(this.getNode(), 'No credentials got returned!');
	}

	if (!Object.keys(body).length) {
		delete options.body;
	}

	if (!Object.keys(qs).length) {
		delete options.qs;
	}

	try {
		return await this.helpers.requestOAuth2.call(this, 'amdocsMediaStorefrontGatewayOAuth2Api', options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error);
	}
}

export async function amdocsMediaStorefrontGatewayApiRequestAllItems(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
) {
	const returnData: IDataObject[] = [];
	let responseData: any;

	do {
		responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, method, endpoint, body, qs);
		// USERTASK: Get next page
		returnData.push(...responseData);
	} while (
		true // USERTASK: Add condition for total not yet reached
	);

	return returnData;
}

export async function handleListing(
	this: IExecuteFunctions,
	method: string,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
) {
	const returnAll = this.getNodeParameter('returnAll', 0) as boolean;

	if (returnAll) {
		return await amdocsMediaStorefrontGatewayApiRequestAllItems.call(this, method, endpoint, body, qs);
	}

	const responseData = await amdocsMediaStorefrontGatewayApiRequestAllItems.call(this, method, endpoint, body, qs);
	const limit = this.getNodeParameter('limit', 0) as number;

	return responseData.slice(0, limit);
}
