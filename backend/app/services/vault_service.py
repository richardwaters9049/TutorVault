# backend/app/services/vault_service.py

import os
from dotenv import load_dotenv

# Load environment variables from .env into the app
load_dotenv()


def get_secret_value(name: str) -> str:
    """
    Simulates secure secret retrieval.
    In production, this would query Azure Key Vault.
    """
    value = os.getenv(name)
    if not value:
        raise KeyError(f"Secret '{name}' not found in .env.")
    return value
