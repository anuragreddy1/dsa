from fastapi import FastAPI
from dsa_tracker.app.database import engine, Base
from dsa_tracker.app.routes import auth
from dsa_tracker.app.models import user  # 👈 VERY IMPORTANT (forces model loading)

app = FastAPI()

Base.metadata.create_all(bind=engine)

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "DSA Progress Tracker API running"}
