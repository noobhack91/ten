import React, { useState } from 'react';
import { TenderHeader } from './components/TenderHeader';
import { ConsigneeSearch } from './components/ConsigneeSearch';
import { ConsigneeTable } from './components/ConsigneeTable';
import { LogisticsModal } from './components/modals/LogisticsModal';
import { ChallanModal } from './components/modals/ChallanModal';
import { InstallationModal } from './components/modals/InstallationModal';
import { InvoiceModal } from './components/modals/InvoiceModal';
import { TenderDetails, ConsigneeData } from './types';
import { calculateLeftDaysToDeliver } from './utils/date';

// Mock data for demonstration
const mockTenderDetails: TenderDetails = {
  tenderNumber: 'TENDER-2024-001',
  authorityType: 'State Health Department',
  contractDate: '2024-03-01',
  deliveryLeadTime: 30,
  installationLeadTime: 15,
  totalDays: 45,
  equipmentName: 'Medical Equipment X',
  leftDaysToDeliver: calculateLeftDaysToDeliver('2024-03-01', 30),
};

const mockDistricts = ['District A', 'District B', 'District C'];
const mockConsignees: ConsigneeData[] = [
  {
    srNo: '1',
    districtName: 'District A',
    blockName: 'Block 1',
    facilityName: 'Hospital A',
    consignmentStatus: 'Processing',
    accessoriesPending: { status: 'No' },
  },
  // Add more mock data as needed
];

function App() {
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [activeConsignee, setActiveConsignee] = useState<string | null>(null);
  const [showLogistics, setShowLogistics] = useState(false);
  const [showChallan, setShowChallan] = useState(false);
  const [showInstallation, setShowInstallation] = useState(false);
  const [showInvoice, setShowInvoice] = useState(false);

  const handleSearch = () => {
    // Implement search logic
    console.log('Searching for districts:', selectedDistricts);
  };

  const handleExport = () => {
    // Implement export logic
    console.log('Exporting data...');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <TenderHeader tenderDetails={mockTenderDetails} onExport={handleExport} />
      
      <ConsigneeSearch
        districts={mockDistricts}
        selectedDistricts={selectedDistricts}
        onDistrictChange={setSelectedDistricts}
        onSearch={handleSearch}
      />
      
      <ConsigneeTable
        consignees={mockConsignees}
        onUpdateSerialNumber={(srNo, serialNumber) => {
          console.log('Updating serial number:', srNo, serialNumber);
        }}
        onOpenLogistics={(srNo) => {
          setActiveConsignee(srNo);
          setShowLogistics(true);
        }}
        onOpenChallan={(srNo) => {
          setActiveConsignee(srNo);
          setShowChallan(true);
        }}
        onOpenInstallation={(srNo) => {
          setActiveConsignee(srNo);
          setShowInstallation(true);
        }}
        onOpenInvoice={(srNo) => {
          setActiveConsignee(srNo);
          setShowInvoice(true);
        }}
      />

      {/* Modals */}
      <LogisticsModal
        isOpen={showLogistics}
        onClose={() => setShowLogistics(false)}
        onSave={(data) => {
          console.log('Saving logistics data:', data);
          setShowLogistics(false);
        }}
      />

      <ChallanModal
        isOpen={showChallan}
        onClose={() => setShowChallan(false)}
        onSave={(data) => {
          console.log('Saving challan data:', data);
          setShowChallan(false);
        }}
      />

      <InstallationModal
        isOpen={showInstallation}
        onClose={() => setShowInstallation(false)}
        onSave={(data) => {
          console.log('Saving installation data:', data);
          setShowInstallation(false);
        }}
      />

      <InvoiceModal
        isOpen={showInvoice}
        onClose={() => setShowInvoice(false)}
        onSave={(data) => {
          console.log('Saving invoice data:', data);
          setShowInvoice(false);
        }}
      />
    </div>
  );
}

export default App;