import Navbar from './components/NavBar'
import Jumbotron from './components/Jumbotron'
import FakeStoreProductComponent from './components/Cards'

export default function HomePage () {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <FakeStoreProductComponent />
            </div>
    )
}