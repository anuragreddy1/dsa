from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from dsa_tracker.app.database import SessionLocal
from dsa_tracker.app.models.problem import Problem
from dsa_tracker.app.schemas.problem import ProblemCreate, ProblemResponse
from dsa_tracker.app.routes.auth import get_current_user
from dsa_tracker.app.models.user import User

router = APIRouter(prefix="/problems", tags=["Problems"])

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/", response_model=ProblemResponse)
def add_problem(
    problem: ProblemCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    new_problem = Problem(
        title=problem.title,
        difficulty=problem.difficulty,
        solved=problem.solved,
        user_id=current_user.id
    )

    db.add(new_problem)
    db.commit()
    db.refresh(new_problem)
    return new_problem

@router.get("/", response_model=list[ProblemResponse])
def get_my_problems(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):
    return db.query(Problem).filter(
        Problem.user_id == current_user.id
    ).all()
