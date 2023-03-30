import { signIn } from 'next-auth/react';
import clientPromise from '@/lib/mongodb';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import NextAuth, { Session, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import AzureADProvider from 'next-auth/providers/azure-ad';

export const authOptions = {
	// Configure one or more authentication providers
	providers: [
		AzureADProvider({
			clientId: process.env.AZURE_AD_CLIENT_ID!,
			clientSecret: process.env.AZURE_AD_CLIENT_SECRET!,
			tenantId: process.env.AZURE_AD_TENANT_ID,
		}),
		// ...add more providers here
	],
	callbacks: {
		async jwt({ token }: { token: JWT }) {
			return token;
		},
		async session({ session, user }: { session: Session; user: User }) {
			session.user = {
				id: user.id,
				name: user.name,
				email: user.email,
				completed: user.completed,
				today: user.today,
				timeToday: user.timeToday,
			};

			return session;
		},
	},
	adapter: MongoDBAdapter(clientPromise),
	pages: {
		signIn: '/auth/signin'
	}
};
// export default NextAuth(authOptions);

export default NextAuth(authOptions);
