import {
	INodeProperties,
} from 'n8n-workflow';

export const subscriptionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
			},
		},
		options: [
			{
				name: 'Cancel User Subscription',
				value: 'cancelUserSubscription',
				description: 'Cancels a subscription.',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get a purchased subscription\'s billing details',
			},
			{
				name: 'Purchase Subscription',
				value: 'purchaseSubscription',
				description: 'Performs a purchase of a subscription with the passed in parameters. A subscription purchase requires at a minimum a a product and a payment method id or an accountId',
			},
			{
				name: 'Reactivate User Subscription',
				value: 'reactivateUserSubscription',
				description: 'Reactivates a canceled subscription before the end of the current billing cycle.',
			},
			{
				name: 'Update Purchase Subscription',
				value: 'updatePurchaseSubscription',
				description: 'Updates a subscription with the passed in parameters.',
			},
		],
		default: 'cancelUserSubscription',
	},
];

export const subscriptionFields: INodeProperties[] = [
	// ----------------------------------------
	//   subscription: cancelUserSubscription
	// ----------------------------------------
	{
		displayName: 'Reason Code',
		name: 'reason_code',
		description: 'The id or the vid of the predefined CancelReason.',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'cancelUserSubscription',
				],
			},
		},
	},
	{
		displayName: 'Autobill ID',
		name: 'autobillId',
		description: 'The autoBillId of the Subscription to be cancelled.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'cancelUserSubscription',
				],
			},
		},
	},
	
	// ----------------------------------------
	//           subscription: getAll
	// ----------------------------------------
	{
		displayName: 'Autobill ID',
		name: 'autobillId',
		description: 'The autobillId of the Subscription.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		description: 'Whether to return all results or only up to a given limit',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		description: 'Max number of results to return',
		typeOptions: {
			minValue: 1,
		},
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'getAll',
				],
				returnAll: [
					false,
				],
			},
		},
	},
	
	// ----------------------------------------
	//    subscription: purchaseSubscription
	// ----------------------------------------
	{
		displayName: 'Dryrun',
		name: 'dryrun',
		description: 'Performs the subscription purchase to generate the initial transaction amounts without sending it for processing.',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'purchaseSubscription',
				],
			},
		},
	},
	
	// ----------------------------------------
	// subscription: reactivateUserSubscription
	// ----------------------------------------
	{
		displayName: 'Autobill ID',
		name: 'autobillId',
		description: 'The autobillId of the Subscription to be reactivated.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'reactivateUserSubscription',
				],
			},
		},
	},
	
	// ----------------------------------------
	// subscription: updatePurchaseSubscription
	// ----------------------------------------
	{
		displayName: 'Autobill ID',
		name: 'autobillId',
		description: 'The autobillId of the Subscription to be updated.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'updatePurchaseSubscription',
				],
			},
		},
	},
	{
		displayName: 'Dryrun',
		name: 'dryrun',
		description: 'Simulates the subscription update to generate the initial transaction amounts without sending it for processing.',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'subscription',
				],
				operation: [
					'updatePurchaseSubscription',
				],
			},
		},
	},
];
