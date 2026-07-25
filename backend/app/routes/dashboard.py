from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ResumeAnalysis


router = APIRouter()



@router.get("/dashboard")
def get_dashboard(
    db: Session = Depends(get_db)
):

    resume = (
        db.query(ResumeAnalysis)
        .order_by(ResumeAnalysis.id.desc())
        .first()
    )


    if not resume:
        return {
            "ats_score":0,
            "skills_count":0,
            "projects_count":0,
            "strengths":[],
            "weaknesses":[],
            "suggestions":[]
        }


    return {

        "ats_score": resume.ats_score,

        "skills_count": len(
            resume.skills or []
        ),

        "projects_count": len(
            resume.projects or []
        ),

        "strengths": resume.strengths,

        "weaknesses": resume.weaknesses,

        "suggestions": resume.suggestions

    }