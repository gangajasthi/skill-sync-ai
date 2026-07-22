from fastapi import FastAPI
from app.database import engine, Base
from app import models
from app.routes import auth

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)


@app.get("/")
def home():
    return {
        "message": "Welcome to SkillSync AI Backend 🚀"
    }