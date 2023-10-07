import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import { getServerSession } from "next-auth";
const dotenv = require("dotenv");
dotenv.config();
{
  console.log(process.env.GOOGLE_ID)
}
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: "623388786757-7700l9pfciqiu36nhoosb2c2c494rg4u.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};
export const getAuthSession = () => getServerSession(authOptions);