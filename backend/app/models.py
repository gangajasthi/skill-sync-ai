from sqlalchemy import Column, Integer, String, JSON, ForeignKey
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