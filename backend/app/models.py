
from sqlalchemy import Column, Integer, String, JSON, ForeignKey, DateTime
from datetime import datetime

from .database import Base
class User(Base):

    __tablename__ = "users"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    name = Column(
        String(100),
        nullable=False
    )


    email = Column(
        String(100),
        unique=True,
        nullable=False
    )


    password = Column(
        String(255),
        nullable=False
    )

    target_role = Column(String(100), nullable=True)




class ResumeAnalysis(Base):

    __tablename__ = "resume_analysis"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )


    name = Column(
        String(100)
    )


    email = Column(
        String(100)
    )


    ats_score = Column(
        Integer,
        default=0
    )


    skills = Column(
        JSON
    )


    projects = Column(
        JSON
    )


    strengths = Column(
        JSON
    )


    weaknesses = Column(
        JSON
    )


    suggestions = Column(
        JSON
    )
class SkillGap(Base):

    __tablename__ = "skill_gap"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )


    target_role = Column(
        String(100)
    )


    matched_skills = Column(
        JSON
    )


    missing_skills = Column(
        JSON
    )


    courses = Column(
        JSON
    )
class InterviewHistory(Base):
    
    __tablename__ = "interview_history"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    user_id = Column(
        Integer,
        ForeignKey("users.id")
    )

    category = Column(
        String(100)
    )

    score = Column(
        Integer
    )

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )