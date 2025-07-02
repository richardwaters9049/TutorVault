# backend/app/api/grade.py
from fastapi import APIRouter

router = APIRouter()


@router.get("/grade/health")
async def health_check():
    return {"status": "grade endpoint is healthy"}
