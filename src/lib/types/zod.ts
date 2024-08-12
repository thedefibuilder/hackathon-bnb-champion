import { isAddress, parseUnits } from 'viem';
import { z } from 'zod';

export const zAddress = z.string().refine((v) => isAddress(v), { message: 'Invalid address' });
export const zBigInt = z
  .string()
  .transform((v) => v.replaceAll(',', ''))
  .refine((v) => !Number.isNaN(Number(v)), { message: 'Invalid number' })
  .transform((v) => parseUnits(v, 18));
