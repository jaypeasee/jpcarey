import './PdfBtn.scss'
import resume from '../JPC_Dev_Resume.pdf'
import { click, tick } from '../../sounds/sounds'


const PdfBtn = ({ position }) => {
  return (
    <div className={`pdf-btn-container-${position}`}>
      <a 
        href={resume} 
        className="pdf-download" 
        target="_blank"
        onClick={() => click.play()}
        onMouseOver={() => tick.play()}
      >See PDF version</a>
    </div>
  )
}

export default PdfBtn