from fastapi import APIRouter, UploadFile, File, HTTPException
from app.services.gemini_service import analyze_resume
from app.services.resume_parser import (extract_text_from_pdf,extract_text_from_docx)
import os
import shutil
from uuid import uuid4

router = APIRouter()

UPLOAD_FOLDER = "uploads/resumes"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

ALLOWED_EXTENSIONS = [".pdf", ".docx"]


@router.post("/upload-resume")
async def upload_resume(file: UploadFile = File(...)):

    # Validate file type
    extension = os.path.splitext(file.filename)[1].lower()

    if extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=400,
            detail="Only PDF and DOCX files are allowed."
        )

    # Generate unique filename
    unique_filename = f"{uuid4()}{extension}"

    file_path = os.path.join(
        UPLOAD_FOLDER,
        unique_filename
    )

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

        # Extract text from resume
    if extension == ".pdf":
        resume_text = extract_text_from_pdf(file_path)
    else:
        resume_text = extract_text_from_docx(file_path)

    # Analyze resume using Gemini

    analysis = analyze_resume(resume_text)

    return {
    "message": "Resume uploaded successfully",
    "filename": unique_filename,
    "original_filename": file.filename,
    "analysis": analysis
}