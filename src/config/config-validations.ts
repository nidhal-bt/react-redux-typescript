import z from "zod";

const envSchema = z.object({
  apiBaseUrl: z.string().url(),
});
const envClientSchema = envSchema.safeParse({
  apiBaseUrl: import.meta.env.VITE_SERVER_BASE_URL,
});

if (!envClientSchema.success) {
  console.error(envClientSchema.error.issues);
  throw new Error("There is an error with the server environment variables");
}

export const envClient = envClientSchema.data;
