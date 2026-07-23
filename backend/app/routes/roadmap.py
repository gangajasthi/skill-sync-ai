from fastapi import APIRouter
from pydantic import BaseModel


router = APIRouter(
    prefix="/roadmap",
    tags=["Roadmap"]
)


class RoadmapRequest(BaseModel):
    role: str
    skills: list[str]
    experience: str



@router.post("/")
def generate_roadmap(data: RoadmapRequest):

    return {
        "message": "Roadmap generated successfully",

        "role": data.role,

        "weekly_plan": [
            {
                "week": "Week 1",
                "title": "Strengthen Fundamentals",
                "tasks": [
                    "Revise core concepts",
                    "Practice coding problems",
                    "Build mini projects"
                ]
            },

            {
                "week": "Week 2",
                "title": "Advanced Skills",
                "tasks": [
                    "Learn advanced frameworks",
                    "Build portfolio projects"
                ]
            }
        ],

        "missing_skills": [
            "Docker",
            "AWS",
            "System Design"
        ]
    }