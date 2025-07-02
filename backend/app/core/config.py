# backend/app/core/config.py

import os
from dotenv import load_dotenv

load_dotenv()


class Settings:
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    APP_SECRET_TOKEN: str = os.getenv("APP_SECRET_TOKEN", "")


settings = Settings()
