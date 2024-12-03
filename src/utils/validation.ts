import { z } from 'zod';
import { FILE_TYPES } from './constants';

export const logisticsSchema = z.object({
  date: z.string().min(1, 'Date is required'),
  courierName: z.string().min(1, 'Courier name is required'),
  docketNumber: z.string().min(1, 'Docket number is required'),
  documents: z
    .array(z.instanceof(File))
    .refine((files) => files.every((file) => file.size <= FILE_TYPES.MAX_SIZE), {
      message: `File size should not exceed ${FILE_TYPES.MAX_SIZE / 1024 / 1024}MB`,
    })
    .refine(
      (files) =>
        files.every((file) =>
          FILE_TYPES.ACCEPTED_FORMATS.split(',').some((format) =>
            file.name.toLowerCase().endsWith(format.toLowerCase().trim())
          )
        ),
      {
        message: `Only ${FILE_TYPES.ACCEPTED_FORMATS} files are allowed`,
      }
    ),
});

export const serialNumberSchema = z.object({
  serialNumber: z.string().min(1, 'Serial number is required'),
});