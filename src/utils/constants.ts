export const COURIER_OPTIONS = [
  { value: 'DHL', label: 'DHL' },
  { value: 'FedEx', label: 'FedEx' },
  { value: 'UPS', label: 'UPS' },
  { value: 'BlueDart', label: 'Blue Dart' },
  { value: 'DTDC', label: 'DTDC' },
] as const;

export const FILE_TYPES = {
  ACCEPTED_FORMATS: '.pdf,.jpg,.jpeg',
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
} as const;

export const STATUS_COLORS = {
  'Processing': 'bg-gray-100 text-gray-800',
  'Dispatched': 'bg-blue-100 text-blue-800',
  'Installation pending': 'bg-yellow-100 text-yellow-800',
  'Installation Done': 'bg-green-100 text-green-800',
  'Invoice Done': 'bg-purple-100 text-purple-800',
  'Bill Submitted': 'bg-indigo-100 text-indigo-800'
} as const;

// Mock data for demonstration
export const MOCK_DISTRICTS = [
  'District A',
  'District B',
  'District C',
  'District D',
  'District E'
];