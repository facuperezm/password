import { env } from "@/env";

interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
}

const api = {
  auth: {
    signup: async (data: SignUpData): Promise<SignUpData> => {
      const response = await fetch(`${env.NEXT_PUBLIC_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      return response.json();
    },
  },
};

export default api;
