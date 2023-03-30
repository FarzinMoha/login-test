import { childProps } from '../../types/Types'
import './Box.scss'

const Box = ({children , className}:childProps) => {
  return (
    <div className={`box ${className}`}>
      {children}
    </div>
  )
}

export default Box