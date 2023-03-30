import ImageIcon from '../../../icon/ImageIcon'
import { childProps } from '../../../types/Types'
import './SectionWithImage.scss'

const SectionWithImage = ({children}:childProps) => {
  return (
    <div className='bg-container'>
        <div className='bg-container-image'>
            <div className='bg-image-container'>
                <ImageIcon width={518} height={518} />
            </div>
        </div>
        <div className='bg-child-container'>
            {children}
        </div>
    </div>
  )
}

export default SectionWithImage