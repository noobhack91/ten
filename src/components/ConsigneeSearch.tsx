import React from 'react';
import Select from 'react-select';
import { Search } from 'lucide-react';

interface ConsigneeSearchProps {
  districts: string[];
  selectedDistricts: string[];
  onDistrictChange: (districts: string[]) => void;
  onSearch: () => void;
}

export const ConsigneeSearch: React.FC<ConsigneeSearchProps> = ({
  districts,
  selectedDistricts,
  onDistrictChange,
  onSearch,
}) => {
  const options = districts.map(district => ({ value: district, label: district }));
  const value = selectedDistricts.map(district => ({ value: district, label: district }));

  return (
    <div className="flex gap-4 mb-6">
      <div className="flex-1">
        <Select
          isMulti
          options={options}
          value={value}
          onChange={(selected) => {
            onDistrictChange(selected.map(option => option.value));
          }}
          className="react-select-container"
          classNamePrefix="react-select"
          placeholder="Search Consignee..."
        />
      </div>
      <button
        onClick={onSearch}
        className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center gap-2"
      >
        <Search size={18} />
        Search
      </button>
    </div>
  );
};