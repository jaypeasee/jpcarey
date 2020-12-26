import React from 'react'
import './Resume.scss'
import resume from './jpc-general-dev-resume.pdf'

const Resume = () => {
    return (
        <section className="resume-section">
            <div className="resume-frame">
                <h2>Resume</h2>
                <object
                    data={resume}
                    className="resume-pdf"
                >
                </object>
            </div>
        </section>
    )
}

export default Resume