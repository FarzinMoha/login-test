import { InputHTMLAttributes } from 'react'
import { inputProps } from '../../types/Types'
import './Input.scss'

const Input:React.FC<InputHTMLAttributes<HTMLInputElement> & inputProps> = ({
  width,
  height,
  error,
  rightIcon
}) => {
  return (
    <div className='input-container' style={{width:`${width}` , height:`${height}`}}>
      <input className='input-field' />
      <div className='input-icon-right'>
        {rightIcon}
      </div>
      <span className='input-error'>{error}</span>
    </div>
  )
}

export default Input