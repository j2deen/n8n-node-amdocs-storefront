import {
	INodeProperties,
} from 'n8n-workflow';

export const paymentMethodOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
			},
		},
		options: [
			{
				name: 'Get All',
				value: 'getAll',
				description: 'Get a list of payment methods linked to an active account.',
			},
			{
				name: 'Get Payment Method',
				value: 'getPaymentMethod',
				description: 'Retrieve a specific payment method by id',
			},
			{
				name: 'Update Payment Method',
				value: 'updatePaymentMethod',
				description: 'Updates a payment method from an account, and returns the updated payment method linked to the account. Caller must provide the primary and active flag for the payment method ID that will be updated.',
			},
			{
				name: 'Update Payment Method',
				value: 'updatePaymentMethod',
				description: 'Updates a payment method from an account, and returns the updated payment method linked to the account. Caller must provide the primary and active flag for the payment method ID that will be updated.',
			},
		],
		default: 'getAll',
	},
];

export const paymentMethodFields: INodeProperties[] = [
	// ----------------------------------------
	//          paymentMethod: getAll
	// ----------------------------------------
	{
		displayName: 'Account ID',
		name: 'accountId',
		description: 'The SLM Account ID.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'onlyActive',
		name: 'onlyActive',
		description: 'The ID of an account.',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'eligibleFor',
		name: 'eligibleFor',
		description: 'A product id.',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'onlyPrimary',
		name: 'onlyPrimary',
		description: 'Query for primary payment methods only',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'getAll',
				],
			},
		},
	},
	{
		displayName: 'Size',
		name: 'size',
		description: 'The page size or limit to fetch',
		type: 'number',
		default: 0,
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
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
					'paymentMethod',
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
					'paymentMethod',
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
	//     paymentMethod: getPaymentMethod
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The ID of payment method.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'getPaymentMethod',
				],
			},
		},
	},
	
	// ----------------------------------------
	//    paymentMethod: updatePaymentMethod
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The SLM Account ID.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'updatePaymentMethod',
				],
			},
		},
	},
	
	// ----------------------------------------
	//    paymentMethod: updatePaymentMethod
	// ----------------------------------------
	{
		displayName: 'Id',
		name: 'id',
		description: 'The SLM Account ID.',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: [
					'paymentMethod',
				],
				operation: [
					'updatePaymentMethod',
				],
			},
		},
	},
];
