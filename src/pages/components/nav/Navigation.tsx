import { Outlet } from 'react-router-dom'

import LogoIcon from '../../../icon/LogoIcon'
import './Navigation.scss'

const Navigation = () => {
  return (
    <>
    <nav className='nav-container'>
        <div className='logo-container'>
            <LogoIcon width={148.65} height={48} />
        </div>
    </nav>
    <Outlet/>
    </>
  )
}

export default Navigation