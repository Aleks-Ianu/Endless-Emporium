import NavBar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import FakeStoreProductComponent from '../components/Cards'
// Chatbot imports
import Chatbot from 'react-chatbot-kit';
import ActionProvider from '../components/Chatbot/ActionProvider';
import MessageParser from '../components/Chatbot/MessageParser';
import config from '../components/Chatbot/Config';
import 'react-chatbot-kit/build/main.css';

export default function HomePage () {
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <FakeStoreProductComponent />
            <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
            </div>
    )
}