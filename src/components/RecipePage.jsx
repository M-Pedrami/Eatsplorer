import { useEffect, useState } from "react";
import {
  Person,
  DiamondFill,
  Alarm,
  Puzzle,
  Plus,
  HandThumbsUp,
} from "react-bootstrap-icons";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import getRecipe from "../hooks/getSingleEntry";
import '../styles/RecipePage.css'

export default function RecipePage() {
  const { ID } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [like, setLike] = useState(0)

  const handleLike = () => {
    setLike((like)=> like + 1)
  }

  useEffect(() => {
    getRecipe(ID)
      .then((res) => setRecipe(res))
      .catch((err) => console.log("From RecipePage:::", err));
  }, [ID]);

  return (
    <div>
      <Container key={recipe?.fields.name}>
        <section className="p-5 bg-body-tertiary mt-5">
          <div className="container d-flex justify-content-between">
            <div>
              <img
                src={recipe?.fields.image.fields.file.url}
                alt={recipe?.fields.name}
                className="w-75 img-fluid rounded-3 d-none d-lg-block"
              />
            </div>
            <div className="container text-lg-start text-center">
              <h1 className="mb-lg-3">{recipe?.fields.name}</h1>
              <hr className="m-lg-auto w-100 mb-lg-3"></hr>
              <div>
                <div className="info">
                  <Person />
                  SERVES: {recipe?.fields.info.serves}
                </div>
                <div className="info">
                  <Alarm />
                  COOKS IN: {recipe?.fields.info.time}
                </div>
                <div className="info">
                  <Puzzle />
                  DIFFICULTY: {recipe?.fields.info.difficulty}
                </div>
                <div className="info">
                  <HandThumbsUp onClick={handleLike} className="like"/>
                  Likes: 
                  {like}
                </div>
              </div>
              <hr className="m-lg-auto w-100" />
              <button
                className="btn d-lg-none border-0 "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#facts"
                aria-expanded="false"
                aria-controls="facts"
              >
                <Plus />
              </button>
              <h5 className="ms-lg-3 mt-lg-5">Nutrition Per Serving</h5>
              <div className="mt-lg-3 d-lg-block collapse" id="facts">
                <div className="row m-3">
                  <div className="col p-1 text-center nutrition-box m-1">
                    <span className="text-sm d-block">Calories</span>
                    <span className="d-block">
                      {recipe?.fields.nutritionalValues.Calories}
                    </span>
                    <hr className="w-75 m-auto" />
                    <span>19%</span>
                  </div>
                  <div className="col p-1 text-center nutrition-box m-1">
                    <span className="text-sm d-block">Fat</span>
                    <span className="d-block">
                      {recipe?.fields.nutritionalValues.Fat}
                    </span>
                    <hr className="w-75 m-auto" />
                    <span>19%</span>
                  </div>
                  <div className="col p-1 text-center nutrition-box m-1">
                    <span className="text-sm d-block">Saturated</span>
                    <span className="d-block">
                      {recipe?.fields.nutritionalValues.Saturated}
                    </span>
                    <hr className="w-75 m-auto" />
                    <span>19%</span>
                  </div>
                  <div className="col p-1 text-center nutrition-box m-1">
                    <span className="text-sm d-block">Carbs</span>
                    <span className="d-block">
                      {recipe?.fields.nutritionalValues.Carbs}
                    </span>
                    <hr className="w-75 m-auto" />
                    <span>19%</span>
                  </div>
                  <div className="col p-1 text-center nutrition-box m-1">
                    <span className="text-sm d-block">Protein</span>
                    <span className="d-block">
                      {recipe?.fields.nutritionalValues.Protein}
                    </span>
                    <hr className="w-75 m-auto" />
                    <span>19%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="p-5 bg-body-secondary method">
          <div className="container d-lg-flex">
            <div className="container text-center text-lg-start ingredients">
              <h3>Ingredients</h3>
              {recipe?.fields.ingredients.map((ingredient, index) => (
                <span key={index}>
                  {index + 1}. {ingredient}{" "}
                  <DiamondFill className="d-lg-none d-sm-inline-block" />{" "}
                  <br className="d-none d-lg-block" />
                </span>
              ))}
            </div>
            <div className="container text-lg-start text-center">
              <h2>Method</h2>
              {recipe?.fields.method.map((step, index) => (
                <p key={index} className="lead">
                  <h4>Step {index + 1}.</h4>

                  {step}
                </p>
              ))}
            </div>
          </div>
          <div></div>
        </section>
      </Container>
    </div>
  );
}
