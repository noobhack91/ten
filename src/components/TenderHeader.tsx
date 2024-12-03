import React from 'react';
import { TenderDetails } from '../types';
import { FileDown } from 'lucide-react';

interface TenderHeaderProps {
  tenderDetails: TenderDetails;
  onExport: () => void;
}

export const TenderHeader: React.FC<TenderHeaderProps> = ({ tenderDetails, onExport }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Tender Number</label>
          <p className="font-medium">{tenderDetails.tenderNumber}</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Authority Type</label>
          <p className="font-medium">{tenderDetails.authorityType}</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Date of Contract/PO</label>
          <p className="font-medium">{tenderDetails.contractDate}</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Lead time to Deliver</label>
          <p className="font-medium">{tenderDetails.deliveryLeadTime} days</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Lead time to Install</label>
          <p className="font-medium">{tenderDetails.installationLeadTime} days</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Total Days</label>
          <p className="font-medium">{tenderDetails.totalDays} days</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Equipment Name</label>
          <p className="font-medium">{tenderDetails.equipmentName}</p>
        </div>
        <div className="space-y-1">
          <label className="text-sm text-gray-500">Left Days to Deliver</label>
          <p className="font-medium">{tenderDetails.leftDaysToDeliver} days</p>
        </div>
      </div>
      <button
        onClick={onExport}
        className="mt-4 flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
      >
        <FileDown size={18} />
        Export Data
      </button>
    </div>
  );
};