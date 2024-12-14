import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ user }) {
            await client.connect();
            const db = client.db("test");

            const existingUser = await db.collection("users").findOne({ email: user.email });

            if (!existingUser) {
                await db.collection("users").insertOne({
                    name: user.name,
                    email: user.email,
                    image: user.image,
                });
            }
            return true;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
});
