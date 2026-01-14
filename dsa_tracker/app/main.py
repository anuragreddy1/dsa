from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from dsa_tracker.app.routes import auth
# from dsa_tracker.app.routes import problems  (keep commented if not ready)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],   # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)

@app.get("/")
def root():
    return {"message": "DSA Progress Tracker API running"}
