interface SignUpData {
  firstName: string;
  lastName: string;
  email: string;
}

const api = {
  auth: {
    signup: async (data: SignUpData): Promise<void> => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to sign up");
      }

      return;
    },
  },
};

export default api;
