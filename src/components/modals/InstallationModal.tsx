import React, { useState } from 'react';
import { BaseModal } from './BaseModal';
import { InstallationDetails } from '../../types';

interface InstallationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: InstallationDetails) => void;
  initialData?: InstallationDetails;
}

export const InstallationModal: React.FC<InstallationModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [date, setDate] = useState(initialData?.date || '');
  const [file, setFile] = useState<File | undefined>(initialData?.file);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (file) {
      onSave({ date, file });
    }
  };

  const handleClear = () => {
    setDate('');
    setFile(undefined);
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} title="Installation Report">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Installation Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Upload File</label>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFile(e.target.files[0]);
              }
            }}
            className="mt-1 block w-full"
            accept=".pdf,.jpg,.jpeg"
            required
          />
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Clear
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </form>
    </BaseModal>
  );
};