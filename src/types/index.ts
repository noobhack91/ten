export type ConsignmentStatus = 
  | 'Processing'
  | 'Dispatched'
  | 'Installation pending'
  | 'Installation Done'
  | 'Invoice Done'
  | 'Bill Submitted';

export interface TenderDetails {
  tenderNumber: string;
  authorityType: string;
  contractDate: string;
  deliveryLeadTime: number;
  installationLeadTime: number;
  totalDays: number;
  equipmentName: string;
  leftDaysToDeliver: number;
}

export interface ConsigneeData {
  srNo: string;
  districtName: string;
  blockName: string;
  facilityName: string;
  consignmentStatus: ConsignmentStatus;
  accessoriesPending: {
    status: 'Yes' | 'No';
    count?: number;
    items?: string[];
  };
  serialNumber?: string;
  logisticsDetails?: LogisticsDetails;
  challanReceipt?: ChallanReceipt;
  installation?: InstallationDetails;
  invoice?: InvoiceDetails;
  billSubmission?: boolean;
}

export interface LogisticsDetails {
  date: string;
  courierName: string;
  docketNumber: string;
  documents?: File[];
}

export interface ChallanReceipt {
  date: string;
  file?: File;
}

export interface InstallationDetails {
  date: string;
  file?: File;
}

export interface InvoiceDetails {
  date: string;
  file?: File;
}