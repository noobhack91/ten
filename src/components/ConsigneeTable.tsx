import React from 'react';
import { ConsigneeData } from '../types';
import { FileText, Truck, FileCheck, Wrench, FileInput, Receipt } from 'lucide-react';

interface ConsigneeTableProps {
  consignees: ConsigneeData[];
  onUpdateSerialNumber: (srNo: string, serialNumber: string) => void;
  onOpenLogistics: (srNo: string) => void;
  onOpenChallan: (srNo: string) => void;
  onOpenInstallation: (srNo: string) => void;
  onOpenInvoice: (srNo: string) => void;
}

export const ConsigneeTable: React.FC<ConsigneeTableProps> = ({
  consignees,
  onUpdateSerialNumber,
  onOpenLogistics,
  onOpenChallan,
  onOpenInstallation,
  onOpenInvoice,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-lg shadow-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sr No</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">District/Consignee</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Block Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Facility Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accessories</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serial Number</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {consignees.map((consignee) => (
            <tr key={consignee.srNo}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consignee.srNo}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consignee.districtName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consignee.blockName}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{consignee.facilityName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(consignee.consignmentStatus)}`}>
                  {consignee.consignmentStatus}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                {consignee.accessoriesPending.status === 'Yes' ? (
                  <span className="text-red-600 font-medium">
                    Yes ({consignee.accessoriesPending.count})
                  </span>
                ) : (
                  <span className="text-green-600">No</span>
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={consignee.serialNumber || ''}
                  onChange={(e) => onUpdateSerialNumber(consignee.srNo, e.target.value)}
                  className="w-full px-3 py-1 border rounded-md"
                  placeholder="Enter S/N"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="flex gap-2">
                  <button
                    onClick={() => onOpenLogistics(consignee.srNo)}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Logistics Details"
                  >
                    <Truck size={18} className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => onOpenChallan(consignee.srNo)}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Challan Receipt"
                  >
                    <Receipt size={18} className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => onOpenInstallation(consignee.srNo)}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Installation"
                  >
                    <Wrench size={18} className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => onOpenInvoice(consignee.srNo)}
                    className="p-1 hover:bg-gray-100 rounded"
                    title="Invoice"
                  >
                    <FileInput size={18} className="text-gray-600" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const getStatusColor = (status: string): string => {
  const statusColors = {
    'Processing': 'bg-gray-100 text-gray-800',
    'Dispatched': 'bg-blue-100 text-blue-800',
    'Installation pending': 'bg-yellow-100 text-yellow-800',
    'Installation Done': 'bg-green-100 text-green-800',
    'Invoice Done': 'bg-purple-100 text-purple-800',
    'Bill Submitted': 'bg-indigo-100 text-indigo-800'
  };
  return statusColors[status as keyof typeof statusColors] || 'bg-gray-100 text-gray-800';
};