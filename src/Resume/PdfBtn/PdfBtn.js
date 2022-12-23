import './PdfBtn.scss'
import resume from '../jpc-dev-resume.pdf'


const PdfBtn = ({ position }) => {
  return (
    <div className={`pdf-btn-container-${position}`}>
      <a 
        href={resume} 
        className="pdf-download" 
        target="_blank"
      >See PDF version</a>
    </div>
  )
}

export default PdfBtn