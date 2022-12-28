import {
	IExecuteFunctions,
} from 'n8n-core';

import {
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';

import {
	amdocsMediaStorefrontGatewayApiRequest,
	handleListing,
} from './GenericFunctions';

import {
	partnerSubscriptionFields,
	partnerSubscriptionOperations,
	paymentMethodFields,
	paymentMethodOperations,
	subscriptionFields,
	subscriptionOperations,
} from './descriptions';

export class AmdocsMediaStorefrontGateway implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Amdocs_Media-Storefront-Gateway',
		name: 'amdocsMediaStorefrontGateway',
		icon: 'file:amdocsMediaStorefrontGateway.png',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Consume the Amdocs_Media-Storefront-Gateway API',
		defaults: {
			name: 'Amdocs_Media-Storefront-Gateway',
			color: '#ffffff',
		},
		inputs: ['main'],
		outputs: ['main'],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				options: [
					{
						name: 'partnerSubscription',
						value: 'partnerSubscription',
					},
					{
						name: 'paymentMethod',
						value: 'paymentMethod',
					},
					{
						name: 'Subscription',
						value: 'subscription',
					},
				],
				default: 'partnersubscription',
			},
			...partnerSubscriptionOperations,
			...partnerSubscriptionFields,
			...paymentMethodOperations,
			...paymentMethodFields,
			...subscriptionOperations,
			...subscriptionFields,
		], 
	}; 

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		let responseData;

		for (let i = 0; i < items.length; i++) {

			if (resource === 'partnerSubscription') {

				// **********************************************************************
				//                          partnerSubscription
				// **********************************************************************

				if (operation === 'cancelBillingPartnerSubscription') {

					// ----------------------------------------
					// partnerSubscription: cancelBillingPartnerSubscription
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					const endpoint = `/partnerSubscription/${id}/cancel`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'POST', endpoint);
				
				} else if (operation === 'getAll') {

					// ----------------------------------------
					//       partnerSubscription: getAll
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					responseData = await handleListing.call(this, 'GET', '/partnerSubscription', {}, qs);
				
				} else if (operation === 'getPartnerSubscription') {

					// ----------------------------------------
					// partnerSubscription: getPartnerSubscription
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					const endpoint = `/partnerSubscription/${id}`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'GET', endpoint);
				
				} else if (operation === 'reprovisionPartnerSubscription') {

					// ----------------------------------------
					// partnerSubscription: reprovisionPartnerSubscription
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					const endpoint = `/partnerSubscription/${id}/reprovision`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'POST', endpoint);
				
				} else if (operation === 'updateBillingPartnerSubscriptionPaymentMethod') {

					// ----------------------------------------
					// partnerSubscription: updateBillingPartnerSubscriptionPaymentMethod
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					const endpoint = `/partnerSubscription/${id}/paymentMethod`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'PUT', endpoint, body);
				
				}

			} else if (resource === 'paymentMethod') {

				// **********************************************************************
				//                             paymentMethod
				// **********************************************************************

				if (operation === 'getAll') {

					// ----------------------------------------
					//          paymentMethod: getAll
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					const qs: IDataObject = {
						accountId: this.getNodeParameter('accountId', i),
					};

					responseData = await handleListing.call(this, 'GET', '/paymentMethod', {}, qs);
				
				} else if (operation === 'getPaymentMethod') {

					// ----------------------------------------
					//     paymentMethod: getPaymentMethod
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'GET', `/paymentMethod/${id}`);
				
				} else if (operation === 'updatePaymentMethod') {

					// ----------------------------------------
					//    paymentMethod: updatePaymentMethod
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					const endpoint = `/paymentMethod/account/${id}`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'PUT', endpoint, body);
				
				} else if (operation === 'updatePaymentMethod') {

					// ----------------------------------------
					//    paymentMethod: updatePaymentMethod
					// ----------------------------------------

					const id = this.getNodeParameter('id', i);

					const endpoint = `/paymentMethod/account/${id}`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'PUT', endpoint, body);
				
				}

			} else if (resource === 'subscription') {

				// **********************************************************************
				//                              subscription
				// **********************************************************************

				if (operation === 'cancelUserSubscription') {

					// ----------------------------------------
					//   subscription: cancelUserSubscription
					// ----------------------------------------

					const autobillId = this.getNodeParameter('autobillId', i);

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					const endpoint = `/subscription/${autobillId}/cancel`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'POST', endpoint, {}, qs);
				
				} else if (operation === 'getAll') {

					// ----------------------------------------
					//           subscription: getAll
					// ----------------------------------------

					const autobillId = this.getNodeParameter('autobillId', i);

					const endpoint = `/subscription/${autobillId}/billingDetail`;
					responseData = await handleListing.call(this, 'GET', endpoint);
				
				} else if (operation === 'purchaseSubscription') {

					// ----------------------------------------
					//    subscription: purchaseSubscription
					// ----------------------------------------

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					const endpoint = '/subscription/purchase';
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'POST', endpoint, body, qs);
				
				} else if (operation === 'reactivateUserSubscription') {

					// ----------------------------------------
					// subscription: reactivateUserSubscription
					// ----------------------------------------

					const autobillId = this.getNodeParameter('autobillId', i);

					const endpoint = `/subscription/${autobillId}/reactivate`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'POST', endpoint);
				
				} else if (operation === 'updatePurchaseSubscription') {

					// ----------------------------------------
					// subscription: updatePurchaseSubscription
					// ----------------------------------------

					const autobillId = this.getNodeParameter('autobillId', i);

					const qs = {} as IDataObject;
					const filters = this.getNodeParameter('filters', i) as IDataObject;

					if (Object.keys(filters).length) {
						Object.assign(qs, filters);
					}

					const endpoint = `/subscription/${autobillId}/update`;
					responseData = await amdocsMediaStorefrontGatewayApiRequest.call(this, 'POST', endpoint, body, qs);
				
				}

			}

			Array.isArray(responseData)
				? returnData.push(...responseData)
				: returnData.push(responseData);

		}

		return [this.helpers.returnJsonArray(returnData)];
	}
} 