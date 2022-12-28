import {
	INodeProperties,
} from 'n8n-workflow';

export const partnerSubscriptionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
			},
		},
		options: [
			{
				name: 'Cancel Billing Partner Subscription',
				value: 'cancelBillingPartnerSubscription',
				description: 'Request to cancel an active Billing partner subscription relationship.',
			},
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get a list of partner subscription information records.',
			},
			{
				name: 'Get Partner Subscription',
				value: 'getPartnerSubscription',
				description: 'Get a specific partner subscription information record.',
			},
			{
				name: 'Reprovision Partner Subscription',
				value: 'reprovisionPartnerSubscription',
				description: 'Triggers a new partner provisioning sequence.',
			},
			{
				name: 'Update Billing Partner Subscription Payment Method',
				value: 'updateBillingPartnerSubscriptionPaymentMethod',
				description: 'Request to update an active Billing partner subscription\'s payment method, returns the updated partner subscription. The billing method must already be associated to the account for which this billing auhtorization has been created.',
			},
		],
		default: 'cancelBillingPartnerSubscription',
	},
];

export const partnerSubscriptionFields: INodeProperties[] = [
	// ----------------------------------------
	// partnerSubscription: cancelBillingPartnerSubscription
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The id of the partner subscription record to be cancelled.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'cancelBillingPartnerSubscription',
				],
			},
		},
	},
	
	// ----------------------------------------
	//       partnerSubscription: getAll
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'The ID of an account.',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Subscription ID',
		name: 'subscriptionId',
		description: 'The ID of a subscription.',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Type',
		name: 'type',
		description: 'The category of Partner subscription to retrieve',
		type: 'string',
		default: 'BILLING',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
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
					'partnerSubscription',
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
					'partnerSubscription',
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
	// partnerSubscription: getPartnerSubscription
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The MarketONE id of the partner subscription record to be retrieved.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'getPartnerSubscription',
				],
			},
		},
	},
	
	// ----------------------------------------
	// partnerSubscription: reprovisionPartnerSubscription
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The id of the partner subscription record to be reprovisioned.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'reprovisionPartnerSubscription',
				],
			},
		},
	},
	
	// ----------------------------------------
	// partnerSubscription: updateBillingPartnerSubscriptionPaymentMethod
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The id of the partner subscription record to be updated.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'updateBillingPartnerSubscriptionPaymentMethod',
				],
			},
		},
	},
	{
		displayName: 'Standard',
		name: 'standard',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: {
			show: {
				resource: [
					'partnerSubscription',
				],
				operation: [
					'updateBillingPartnerSubscriptionPaymentMethod',
				],
			},
		},
		options: [
		],
	},
];
