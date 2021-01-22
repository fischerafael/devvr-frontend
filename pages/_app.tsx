import { SessionProvider } from '../src/contexts/session';
import '../src/styles/index.css';

export default function MyApp({ Component, pageProps }) {
	return (
		<SessionProvider>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
