import NavBar from '../components/Navbar'
import Jumbotron from '../components/Jumbotron'
import FakeStoreProductComponent from '../components/Cards'
import 'react-chatbot-kit/build/main.css';
import ChatBotContainer from '../components/Chatbot/ChatBotContainer/ChatBotContainer';


export default function HomePage () {
    return (
        <div>
            <NavBar />
            <Jumbotron />
            <FakeStoreProductComponent />
            <ChatBotContainer />
            
            </div>
    )
}