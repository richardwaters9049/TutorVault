# tutorvault/backend/main.py

from fastapi import FastAPI
from app.api import chat, grade, vault
from fastapi.middleware.cors import CORSMiddleware

# Create FastAPI app instance
app = FastAPI(
    title="TutorVault API",
    description="Backend API for TutorVault AI Educational Assistant",
    version="1.0.0",
)

# Allow requests from frontend (Next.js dev server)
origins = ["http://localhost:3000"]

# Add CORS middleware to allow frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include modular routers
app.include_router(chat.router, prefix="/chat", tags=["Chat"])
app.include_router(grade.router, prefix="/grade", tags=["Grading"])
app.include_router(vault.router, prefix="/vault", tags=["KeyVault"])
