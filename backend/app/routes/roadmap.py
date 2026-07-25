# from fastapi import APIRouter
# from pydantic import BaseModel


# router = APIRouter(
#     prefix="/roadmap",
#     tags=["Roadmap"]
# )



# class RoadmapRequest(BaseModel):

#     role: str

#     skills: list[str]

#     experience: str




# ROLE_ROADMAPS = {


# "Frontend Developer":{


# "weeks":[

# {
# "week":"Week 1",
# "title":"Frontend Fundamentals",
# "tasks":[
# "Revise HTML and CSS",
# "Master JavaScript fundamentals",
# "Build responsive web pages"
# ]
# },


# {
# "week":"Week 2",
# "title":"React Development",
# "tasks":[
# "Learn React components",
# "Understand props and state",
# "Build React mini projects"
# ]
# },


# {
# "week":"Week 3",
# "title":"Advanced Frontend",
# "tasks":[
# "Learn TypeScript",
# "Practice API integration",
# "Learn React optimization"
# ]
# },


# {
# "week":"Week 4",
# "title":"Production Skills",
# "tasks":[
# "Learn testing",
# "Understand deployment",
# "Build portfolio project"
# ]
# }


# ]


# },




# "Data Analyst":{


# "weeks":[

# {
# "week":"Week 1",
# "title":"Data Analysis Basics",
# "tasks":[
# "Learn Python basics",
# "Practice Excel",
# "Understand statistics"
# ]
# },


# {
# "week":"Week 2",
# "title":"Data Processing",
# "tasks":[
# "Learn SQL",
# "Practice Pandas",
# "Clean datasets"
# ]
# },


# {
# "week":"Week 3",
# "title":"Visualization",
# "tasks":[
# "Learn Power BI",
# "Create dashboards",
# "Analyze business data"
# ]
# },


# {
# "week":"Week 4",
# "title":"Projects",
# "tasks":[
# "Build analytics projects",
# "Create portfolio",
# "Prepare interviews"
# ]
# }

# ]


# }

# }





# @router.post("/")
# def generate_roadmap(data: RoadmapRequest):


#     roadmap = ROLE_ROADMAPS.get(
#         data.role,
#         ROLE_ROADMAPS["Frontend Developer"]
#     )



#     return {


#         "message":
#         "Roadmap generated successfully",


#         "role":
#         data.role,



#         "experience":
#         data.experience,



#         "current_skills":
#         data.skills,



#         "weekly_plan":
#         roadmap["weeks"]



#     }

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





ROLE_SKILLS = {


    "Frontend Developer":[
        "React",
        "JavaScript",
        "TypeScript",
        "Testing",
        "Docker"
    ],


    "Data Analyst":[
        "Python",
        "SQL",
        "Pandas",
        "Excel",
        "Power BI",
        "Statistics"
    ],


    "Backend Developer":[
        "Python",
        "FastAPI",
        "SQL",
        "Docker",
        "API Design"
    ]

}





ROLE_ROADMAPS = {


"Frontend Developer":[

{
"week":"Week 1",
"title":"Frontend Fundamentals",
"tasks":[
"Revise HTML and CSS",
"Master JavaScript fundamentals",
"Build responsive web pages"
]
},


{
"week":"Week 2",
"title":"React Development",
"tasks":[
"Learn React components",
"Understand props and state",
"Build React mini projects"
]
},


{
"week":"Week 3",
"title":"Advanced Frontend",
"tasks":[
"Learn TypeScript",
"Practice API integration",
"Learn React optimization"
]
},


{
"week":"Week 4",
"title":"Production Skills",
"tasks":[
"Learn testing",
"Understand deployment",
"Build portfolio project"
]
}

],




"Data Analyst":[

{
"week":"Week 1",
"title":"Data Analysis Basics",
"tasks":[
"Learn Python basics",
"Practice Excel",
"Understand statistics"
]
},


{
"week":"Week 2",
"title":"Data Processing",
"tasks":[
"Learn SQL",
"Practice Pandas",
"Clean datasets"
]
},


{
"week":"Week 3",
"title":"Visualization",
"tasks":[
"Learn Power BI",
"Create dashboards",
"Analyze business data"
]
},


{
"week":"Week 4",
"title":"Analytics Projects",
"tasks":[
"Build analytics projects",
"Create portfolio",
"Prepare interviews"
]
}

],




"Backend Developer":[

{
"week":"Week 1",
"title":"Backend Fundamentals",
"tasks":[
"Learn Python",
"Understand APIs",
"Practice backend logic"
]
},


{
"week":"Week 2",
"title":"Backend Frameworks",
"tasks":[
"Learn FastAPI",
"Build REST APIs",
"Connect databases"
]
},


{
"week":"Week 3",
"title":"Database Skills",
"tasks":[
"Learn SQL",
"Database optimization",
"Practice queries"
]
},


{
"week":"Week 4",
"title":"Deployment",
"tasks":[
"Docker basics",
"Deploy backend applications",
"Build backend projects"
]
}

]


}





@router.post("/")
def generate_roadmap(data: RoadmapRequest):


    # Get required skills for role

    required_skills = ROLE_SKILLS.get(
        data.role,
        ROLE_SKILLS["Frontend Developer"]
    )



    # Convert user skills to lowercase

    user_skills = [

        skill.lower()

        for skill in data.skills

    ]



    # Find missing skills

    missing_skills = []


    for skill in required_skills:

        if skill.lower() not in user_skills:

            missing_skills.append(skill)



    # Get roadmap

    roadmap = ROLE_ROADMAPS.get(

        data.role,

        ROLE_ROADMAPS["Frontend Developer"]

    )



    return {


        "message":
        "Roadmap generated successfully",



        "role":
        data.role,



        "experience":
        data.experience,



        "current_skills":
        data.skills,



        "missing_skills":
        missing_skills,



        "weekly_plan":
        roadmap


    }