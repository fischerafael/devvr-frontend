import { SessionProvider } from '../src/contexts/session';
import { UsersProvider } from '../src/contexts/users';
import '../src/styles/index.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider>
			<UsersProvider>
				<Component {...pageProps} />
			</UsersProvider>
		</SessionProvider>
	);
}
