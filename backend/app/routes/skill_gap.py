# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session

# from app.database import get_db
# from app.models import ResumeAnalysis, User


# router = APIRouter()


# @router.get("/skill-gap")
# def get_skill_gap(
#     db: Session = Depends(get_db)
# ):

#     # Latest resume analysis
#     resume = (
#     db.query(ResumeAnalysis)
#     .order_by(ResumeAnalysis.id.desc())
#     .first()
# )
    


#     if not resume:

#         return {
#             "message": "No resume analysis found",
#             "matched_skills": [],
#             "missing_skills": [],
#             "courses": []
#         }



#     # Required skills for Frontend Developer
#     # required_skills = [
#     #     "React",
#     #     "JavaScript",
#     #     "HTML",
#     #     "CSS",
#     #     "TypeScript",
#     #     "Docker",
#     #     "System Design",
#     #     "Testing"
#     # ]

#     required_skills = ROLE_SKILLS.get(
#     target_role,
#     ROLE_SKILLS["Frontend Developer"]
# )



#     user_skills = [
#         skill.lower()
#         for skill in resume.skills
#     ]



#     matched = []
#     missing = []



#     for skill in required_skills:

#         if skill.lower() in user_skills:
#             matched.append(
#                 {
#                     "name": skill,
#                     "status": "have",
#                     "proficiency": 80
#                 }
#             )

#         else:

#             missing.append(
#                 {
#                     "name": skill,
#                     "status": "missing",
#                     "proficiency": 20
#                 }
#             )



#     courses = []


#     for item in missing:

#         courses.append(
#             {
#                 "title": f"{item['name']} Fundamentals",
#                 "description": f"Close gap in {item['name']}"
#             }
#         )



#     return {

#         # "target_role": "Frontend Developer",

#         "target_role": target_role,

#         "matched_skills": matched,

#         "missing_skills": missing,

#         "courses": courses

#     }

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.models import ResumeAnalysis, User


router = APIRouter()



ROLE_SKILLS = {

    "Frontend Developer": [
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "TypeScript",
        "Docker",
        "Testing"
    ],


    "Data Analyst": [
        "Python",
        "SQL",
        "Pandas",
        "Excel",
        "Power BI",
        "Statistics"
    ],


    "Backend Developer": [
        "Python",
        "FastAPI",
        "Django",
        "SQL",
        "Docker",
        "API Design"
    ]

}




@router.get("/skill-gap")
def get_skill_gap(
    db: Session = Depends(get_db)
):


    # Get latest resume analysis

    resume = (
        db.query(ResumeAnalysis)
        .order_by(ResumeAnalysis.id.desc())
        .first()
    )


    if not resume:

        return {
            "message": "No resume analysis found",
            "matched_skills": [],
            "missing_skills": [],
            "courses": []
        }



    # Find user

    user = (
        db.query(User)
        .filter(User.id == resume.user_id)
        .first()
    )


    # Get selected role

    if user and user.target_role:

        target_role = user.target_role

    else:

        target_role = "Frontend Developer"



    # Skills required for selected role

    required_skills = ROLE_SKILLS.get(
        target_role,
        ROLE_SKILLS["Frontend Developer"]
    )



    # User resume skills

    user_skills = [
        skill.lower()
        for skill in resume.skills
    ]



    matched = []

    missing = []



    for skill in required_skills:


        if skill.lower() in user_skills:

            matched.append(
                {
                    "name": skill,
                    "status": "have",
                    "proficiency": 80
                }
            )


        else:

            missing.append(
                {
                    "name": skill,
                    "status": "missing",
                    "proficiency": 20
                }
            )




    # Course recommendations

    courses = []


    for item in missing:

        courses.append(
            {
                "title": f"{item['name']} Fundamentals",
                "description": f"Close gap in {item['name']}"
            }
        )




    return {


        "target_role": target_role,


        "matched_skills": matched,


        "missing_skills": missing,


        "courses": courses

    }