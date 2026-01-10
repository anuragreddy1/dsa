from fastapi import FastAPI
from dsa_tracker.app.routes import auth, problems

app = FastAPI()

app.include_router(auth.router)
app.include_router(problems.router)

@app.get("/")
def root():
    return {"message": "DSA Progress Tracker API running"}
