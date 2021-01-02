import React from 'react'
import './Resume.scss'
import resume from './jpc-general-dev-resume.pdf'

const Resume = () => {
    return (
        <section className="resume-section">
            <div className="resume-frame">
                <object
                    data={resume}
                    type='application/pdf'
                    width="100%"
                    height="100%"
                    className="resume-pdf"
                >
                </object>
            </div>
        </section>
    )
}

export default Resume