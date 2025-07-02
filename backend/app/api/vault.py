# backend/app/api/vault.py

from fastapi import APIRouter, HTTPException
from app.services.vault_service import get_secret_value

router = APIRouter()


@router.get("/vault/get-secret")
def fetch_secret(name: str):
    """
    Simulated Azure Key Vault secret fetch.
    Accepts a secret 'name' and returns its value.
    """
    try:
        value = get_secret_value(name)
        return {"secret": value}
    except KeyError:
        raise HTTPException(status_code=404, detail=f"Secret '{name}' not found.")
