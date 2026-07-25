# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session

# from app.database import get_db
# from app.models import User


# router = APIRouter(
#     prefix="/interview",
#     tags=["Mock Interview"]
# )


# INTERVIEW_CATEGORIES = {

#     "Frontend Developer": [

#         {
#             "name":"Frontend Development",
#             "questions":12,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"Data Structures & Algorithms",
#             "questions":15,
#             "difficulty":"Hard"
#         },

#         {
#             "name":"Behavioral",
#             "questions":8,
#             "difficulty":"Easy"
#         },

#         {
#             "name":"System Design",
#             "questions":6,
#             "difficulty":"Hard"
#         }

#     ],


#     "Backend Developer":[

#         {
#             "name":"Backend Development",
#             "questions":12,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"API Design",
#             "questions":10,
#             "difficulty":"Hard"
#         },

#         {
#             "name":"Database",
#             "questions":10,
#             "difficulty":"Medium"
#         }

#     ],


#     "Data Analyst":[

#         {
#             "name":"SQL",
#             "questions":10,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"Python",
#             "questions":10,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"Statistics",
#             "questions":8,
#             "difficulty":"Hard"
#         }

#     ]

# }




# @router.get("/categories")
# def get_categories():

#     return INTERVIEW_CATEGORIES["Frontend Developer"]


# from fastapi import APIRouter
# from pydantic import BaseModel
# from app.models import InterviewHistory
# from app.auth import get_current_user
# from app.models import User
# import random


# router = APIRouter(
#     prefix="/interview",
#     tags=["Mock Interview"]
# )



# # -------------------------------
# # Interview Categories
# # -------------------------------

# INTERVIEW_CATEGORIES = {

#     "Frontend Developer": [

#         {
#             "name":"Frontend Development",
#             "questions":12,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"Data Structures & Algorithms",
#             "questions":15,
#             "difficulty":"Hard"
#         },

#         {
#             "name":"Behavioral",
#             "questions":8,
#             "difficulty":"Easy"
#         },

#         {
#             "name":"System Design",
#             "questions":6,
#             "difficulty":"Hard"
#         }

#     ],


#     "Backend Developer":[

#         {
#             "name":"Backend Development",
#             "questions":12,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"API Design",
#             "questions":10,
#             "difficulty":"Hard"
#         },

#         {
#             "name":"Database",
#             "questions":10,
#             "difficulty":"Medium"
#         }

#     ],


#     "Data Analyst":[

#         {
#             "name":"SQL",
#             "questions":10,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"Python",
#             "questions":10,
#             "difficulty":"Medium"
#         },

#         {
#             "name":"Statistics",
#             "questions":8,
#             "difficulty":"Hard"
#         }

#     ]

# }



# @router.get("/categories")
# def get_categories():

#     return INTERVIEW_CATEGORIES["Frontend Developer"]





# # -------------------------------
# # Interview Questions
# # -------------------------------


# INTERVIEW_QUESTIONS = {


# "Frontend Development":[

#     "Explain React component lifecycle.",
#     "What is the difference between state and props in React?",
#     "How does JavaScript event loop work?",
#     "Explain CSS box model.",
#     "How do you optimize React applications?"

# ],


# "Data Structures & Algorithms":[

#     "Explain time complexity of binary search.",
#     "Difference between array and linked list.",
#     "Explain BFS and DFS.",
#     "What is recursion?",
#     "How does hashing work?"

# ],


# "Behavioral":[

#     "Tell me about yourself.",
#     "Describe a challenging project you worked on.",
#     "How do you handle conflicts in a team?",
#     "Why should we hire you?"

# ],


# "System Design":[

#     "Design a URL shortening service.",
#     "Explain database scaling.",
#     "How would you design a chat application?",
#     "Explain caching strategies."

# ],


# "Backend Development":[

#     "Explain REST API architecture.",
#     "Difference between SQL and NoSQL databases.",
#     "Explain authentication using JWT.",
#     "How does FastAPI work?"

# ]


# }





# # Request schema

# class InterviewStartRequest(BaseModel):

#     category: str





# # Start Interview API

# @router.post("/start")
# def start_interview(
#     data: InterviewStartRequest
# ):


#     questions = INTERVIEW_QUESTIONS.get(
#         data.category,
#         INTERVIEW_QUESTIONS["Frontend Development"]
#     )


#     selected_questions = random.sample(
#         questions,
#         min(3,len(questions))
#     )


#     return {

#         "category": data.category,

#         "total_questions": len(selected_questions),

#         "questions": selected_questions

#     }

from fastapi import APIRouter, Depends
from pydantic import BaseModel
from sqlalchemy.orm import Session
from app.database import get_db
from app.models import InterviewHistory, User
from app.auth import get_current_user

import random



router = APIRouter(
    prefix="/interview",
    tags=["Mock Interview"]
)





# ---------------------------------
# Interview Categories
# ---------------------------------

INTERVIEW_CATEGORIES = {


"Frontend Developer":[


{
"name":"Frontend Development",
"questions":12,
"difficulty":"Medium"
},


{
"name":"Data Structures & Algorithms",
"questions":15,
"difficulty":"Hard"
},


{
"name":"Behavioral",
"questions":8,
"difficulty":"Easy"
},


{
"name":"System Design",
"questions":6,
"difficulty":"Hard"
}


],




"Backend Developer":[


{
"name":"Backend Development",
"questions":12,
"difficulty":"Medium"
},


{
"name":"API Design",
"questions":10,
"difficulty":"Hard"
},


{
"name":"Database",
"questions":10,
"difficulty":"Medium"
}


],





"Data Analyst":[


{
"name":"SQL",
"questions":10,
"difficulty":"Medium"
},


{
"name":"Python",
"questions":10,
"difficulty":"Medium"
},


{
"name":"Statistics",
"questions":8,
"difficulty":"Hard"
}


]

}




# ---------------------------------
# Get Categories
# ---------------------------------

@router.get("/categories")
def get_categories():

    return INTERVIEW_CATEGORIES["Frontend Developer"]






# ---------------------------------
# Questions
# ---------------------------------


INTERVIEW_QUESTIONS = {



"Frontend Development":[

"Explain React component lifecycle.",

"What is the difference between state and props in React?",

"How does JavaScript event loop work?",

"Explain CSS box model.",

"How do you optimize React applications?"

],




"Data Structures & Algorithms":[

"Explain time complexity of binary search.",

"Difference between array and linked list.",

"Explain BFS and DFS.",

"What is recursion?",

"How does hashing work?"

],




"Behavioral":[

"Tell me about yourself.",

"Describe a challenging project you worked on.",

"How do you handle conflicts in a team?",

"Why should we hire you?"

],




"System Design":[

"Design a URL shortening service.",

"Explain database scaling.",

"How would you design a chat application?",

"Explain caching strategies."

],




"Backend Development":[

"Explain REST API architecture.",

"Difference between SQL and NoSQL databases.",

"Explain authentication using JWT.",

"How does FastAPI work?"

],




"API Design":[

"What are REST principles?",

"Explain API versioning.",

"How do you secure APIs?"

],




"Database":[

"What are database indexes?",

"Explain normalization.",

"Difference between SQL and NoSQL."

],




"SQL":[

"Explain SQL joins.",

"What is GROUP BY?",

"Difference between WHERE and HAVING."

],




"Python":[

"What are Python decorators?",

"Explain list comprehension.",

"Difference between list and tuple."

],




"Statistics":[

"Explain mean and median.",

"What is standard deviation?",

"Explain probability basics."

]


}






# ---------------------------------
# Start Interview
# ---------------------------------


class InterviewStartRequest(BaseModel):

    category:str






@router.post("/start")
def start_interview(
    data:InterviewStartRequest
):


    questions = INTERVIEW_QUESTIONS.get(

        data.category,

        INTERVIEW_QUESTIONS["Frontend Development"]

    )



    selected_questions = random.sample(

        questions,

        min(3,len(questions))

    )



    return {


        "category":data.category,


        "total_questions":len(selected_questions),


        "questions":selected_questions


    }









# ---------------------------------
# Save Interview Result
# ---------------------------------


class InterviewResult(BaseModel):

    category:str

    score:int





@router.post("/finish")
def finish_interview(

    data:InterviewResult,

    db:Session = Depends(get_db),

    current_user:User = Depends(get_current_user)

):


    history = InterviewHistory(


        user_id=current_user.id,


        category=data.category,


        score=data.score


    )



    db.add(history)

    db.commit()

    db.refresh(history)



    return {


        "message":"Interview saved successfully",

        "category":history.category,

        "score":history.score

    }




@router.get("/history")
def get_interview_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    history = (
        db.query(InterviewHistory)
        .filter(
            InterviewHistory.user_id == current_user.id
        )
        .order_by(
            InterviewHistory.created_at.desc()
        )
        .all()
    )


    return [
        {
            "category": item.category,
            "score": item.score,
            "date": item.created_at.strftime("%b %d, %Y")
        }
        for item in history
    ]







# ---------------------------------
# Get Interview History
# ---------------------------------


@router.get("/history")
def interview_history(

    db:Session = Depends(get_db),

    current_user:User = Depends(get_current_user)

):


    history = (

        db.query(InterviewHistory)

        .filter(

            InterviewHistory.user_id == current_user.id

        )

        .order_by(

            InterviewHistory.id.desc()

        )

        .all()

    )



    return [


        {

            "category":item.category,

            "score":item.score,

            "date":item.created_at.strftime("%b %d, %Y")

        }


        for item in history

    ]