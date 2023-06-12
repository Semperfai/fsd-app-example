import { z } from 'zod'

const envVariables = z.object({
  VITE_API_ENDPOINT: z.string().url(),
  VITE_API_DELAY: z.string().regex(/^\d+$/, { message: 'Must be a positive number' }).optional()
})

envVariables.parse(import.meta.env)

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const config = {
  API_ENDPOINT: import.meta.env.VITE_API_ENDPOINT,
  API_DELAY: Number(import.meta.env.VITE_API_DELAY) || 100
} as const
