from fastapi import FastAPI
from app.database import engine, Base
from app.routes import auth
from app.models import user  # 👈 VERY IMPORTANT (forces model loading)

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "DSA Progress Tracker API running"}
