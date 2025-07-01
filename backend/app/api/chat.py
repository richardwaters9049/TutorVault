# backend/app/api/chat.py

from fastapi import APIRouter, UploadFile, File, Form
from app.services.chat_service import process_pdf_and_answer
from pydantic import BaseModel

router = APIRouter()


class ChatRequest(BaseModel):
    question: str


@router.post("/ask")
async def chat_with_pdf(file: UploadFile = File(...), question: str = Form(...)):
    """
    Endpoint to upload a PDF and ask a question about its content.
    """
    response = await process_pdf_and_answer(file, question)
    return {"answer": response}
