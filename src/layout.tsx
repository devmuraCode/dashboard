import About from './components/About';
import Auth from './components/Auth'
import { ACCESS_TOKEN_KEY } from './constants';
import ToasterProvider from './providers/ToasterProvider'

const MainLayout = () => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);
    console.log(token);

    if(token) {
        return <About/>
    }
  return (
    <div>
        <Auth/>
        <ToasterProvider/>
    </div>
  )
}

export default MainLayout