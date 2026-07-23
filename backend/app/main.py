from fastapi import FastAPI
from app.database import engine, Base
from app import models
from app.routes import auth, resume

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)
app.include_router(resume.router)


@app.get("/")
def home():
    return {
        "message": "Welcome to SkillSync AI Backend 🚀"
    }