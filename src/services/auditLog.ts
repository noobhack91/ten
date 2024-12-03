export interface AuditLogEntry {
  userId: string;
  action: string;
  details: string;
  timestamp: Date;
}

export const logAction = async (entry: Omit<AuditLogEntry, 'timestamp'>) => {
  const timestamp = new Date();
  console.log('Audit Log:', { ...entry, timestamp });
  
  // In a real application, you would send this to your backend
  // await fetch('/api/audit-logs', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ ...entry, timestamp }),
  // });
};