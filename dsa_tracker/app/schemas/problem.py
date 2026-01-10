from pydantic import BaseModel

class ProblemCreate(BaseModel):
    title: str
    difficulty: str
    solved: bool

class ProblemResponse(BaseModel):
    id: int
    title: str
    difficulty: str
    solved: bool

    class Config:
        from_attributes = True
