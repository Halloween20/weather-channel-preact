import { render } from 'preact';
import { useState } from 'preact/hooks';
import './index.css';
import { WCHeader } from './components/WCHeader';
import { WCContent } from './components/WCContent';
import { WCFooter } from './components/WCFooter';

export function App() {
	const [message, setMessage] = useState("WINDS WILL BE NORTH AROUND 10 MPH");
	//update message from url params
	const urlParams = new URLSearchParams(window.location.search);
	const messageParam = urlParams.get('message');
	if (messageParam) {
		setMessage(messageParam);
	}


	return (
		<>
		<WCHeader />
		<WCContent message={message} />
		<WCFooter />
		</>
	);
}

render(<App />, document.getElementById('app'));

