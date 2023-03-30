import { childProps } from '../../types/Types'
import './BoxTitle.scss'

const BoxTitle = ({children}:childProps) => {
  return (
    <h2 className='box-title'>{children}</h2>
  )
}

export default BoxTitle