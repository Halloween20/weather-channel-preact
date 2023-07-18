import { render } from 'preact';
import { useState } from 'preact/hooks';
import './index.css';
import { WCHeader } from './components/WCHeader';
import { WCContent } from './components/WCContent';
import { WCFooter } from './components/WCFooter';

export function App() {
	const [count, setCount] = useState(0);

	return (
		<>
		<WCHeader />
		<WCContent />
		<WCFooter />
		</>
	);
}

render(<App />, document.getElementById('app'));

