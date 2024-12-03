import { format, differenceInDays } from 'date-fns';

export const formatDate = (date: string | Date): string => {
  return format(new Date(date), 'dd/MM/yyyy');
};

export const calculateLeftDaysToDeliver = (
  contractDate: string,
  deliveryLeadTime: number
): number => {
  const startDate = new Date(contractDate);
  const targetDate = new Date(startDate);
  targetDate.setDate(targetDate.getDate() + deliveryLeadTime);
  
  return differenceInDays(targetDate, new Date());
};