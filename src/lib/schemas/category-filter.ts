import { z } from "zod";

export const categoryFilterSchema = z.object({
    category: z.string(),
})

export type TCategoryFilter = z.infer<typeof categoryFilterSchema>;