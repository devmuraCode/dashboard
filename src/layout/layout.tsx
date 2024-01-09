import AuthPage from '../pages/AuthPage';
import ToasterProvider from '../providers/ToasterProvider'

const MainLayout = () => {
  return (
    <div>
        <AuthPage/>
        <ToasterProvider/>
    </div>
  )
}

export default MainLayout


