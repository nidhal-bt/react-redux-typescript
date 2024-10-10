import z from "zod";

const envSchema = z.object({
  apiBaseUrl: z.string().url(),
});

const envClientSchema = envSchema.safeParse({
  NEXT_PUBLIC_SUPABASE_URL: process.env.REACT_APP_API_URL,
});

if (!envClientSchema.success) {
  console.error(envClientSchema.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const envClient = envClientSchema.data;
