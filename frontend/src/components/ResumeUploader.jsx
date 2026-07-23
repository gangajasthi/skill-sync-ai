import { useRef, useState } from 'react'
import '../styles/ResumeUploader.css'

function ResumeUploader({ onAnalyze }) {
  const [file, setFile] = useState(null)
  const [dragging, setDragging] = useState(false)
  const inputRef = useRef(null)

  const handleFiles = (files) => {
    if (files && files[0]) setFile(files[0])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  return (
    <div className="resume-uploader">
      <div
        className={`resume-uploader__zone ${dragging ? 'resume-uploader__zone--active' : ''}`}
        onDragOver={(e) => { e.preventDefault(); setDragging(true) }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
      >
        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          hidden
          onChange={(e) => handleFiles(e.target.files)}
        />
        <div className="resume-uploader__icon">⬆</div>
        <p className="resume-uploader__title">
          {file ? file.name : 'Drag & drop your resume here'}
        </p>
        <p className="resume-uploader__hint">
          {file ? 'File ready to analyze' : 'PDF, DOC or DOCX — up to 5MB'}
        </p>
        {!file && <span className="btn btn--outline resume-uploader__browse">Browse Files</span>}
      </div>

      {file && (
        <div className="resume-uploader__actions">
          <button className="btn btn--ghost" onClick={() => setFile(null)}>Remove</button>
          <button className="btn btn--primary" onClick={() => onAnalyze && onAnalyze(file)}>
            Analyze Resume
          </button>
        </div>
      )}
    </div>
  )
}

export default ResumeUploader
