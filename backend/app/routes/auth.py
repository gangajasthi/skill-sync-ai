
# from fastapi import APIRouter, Depends, HTTPException
# from sqlalchemy.orm import Session

# # from app.schemas import UserRegister

# from app.schemas import UserRegister, UserLogin
# from app.database import get_db
# from app.models import User
# from app.auth import hash_password, verify_password
# # from app.auth import hash_password

# router = APIRouter()


# @router.post("/register")
# def register(user: UserRegister, db: Session = Depends(get_db)):

#     # Check if email already exists
#     existing_user = db.query(User).filter(User.email == user.email).first()

#     if existing_user:
#         raise HTTPException(status_code=400, detail="Email already registered")

#     # Hash password
#     hashed_password = hash_password(user.password)

#     # Create user object
#     new_user = User(
#         name=user.name,
#         email=user.email,
#         password=hashed_password
#     )

#     # Save to database
#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)

#     return {
#         "message": "User registered successfully"
#     }

import token

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.schemas import UserRegister, UserLogin
from app.database import get_db
from app.models import User
from app.auth import (hash_password,verify_password,create_access_token,get_current_user)
router = APIRouter()


# ==========================
# Register API
# ==========================
@router.post("/register")
def register(user: UserRegister, db: Session = Depends(get_db)):

    # Check if email already exists
    existing_user = db.query(User).filter(User.email == user.email).first()

    if existing_user:
        raise HTTPException(
            status_code=400,
            detail="Email already registered"
        )

    # Hash password
    hashed_password = hash_password(user.password)

    # Create user object
    new_user = User(
        name=user.name,
        email=user.email,
        password=hashed_password
    )

    # Save to database
    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return {
        "message": "User registered successfully"
    }


# ==========================
# Login API
# ==========================
@router.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):

    # Check if user exists
    existing_user = db.query(User).filter(User.email == user.email).first()

    if not existing_user:
        raise HTTPException(
            status_code=404,
            detail="User not found"
        )

    # Verify password
    if not verify_password(user.password, existing_user.password):
        raise HTTPException(
            status_code=401,
            detail="Invalid Password"
        )

    # return {
    #     "message": "Login Successful"
    # }

    token = create_access_token(
    data={
        "sub": existing_user.email
    }
)

    return {
    "access_token": token,
    "token_type": "bearer"
}
@router.get("/profile")
def profile(current_user: User = Depends(get_current_user)):
    return {
        "id": current_user.id,
        "name": current_user.name,
        "email": current_user.email
    }