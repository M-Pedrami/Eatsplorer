/* Import Alarm Icon Component from react-bootstrap-icons */
import { Alarm } from "react-bootstrap-icons";

/* Import Link Component from react-router-dom */
import { Link } from "react-router-dom";

/* Import Custom CSS File from Styles folder */
import '../styles/RecipeCard.css'

export default function RecipeCard({ recipe }) {
  console.log(recipe)
  return (
    <>
      <div className="col-lg-4 col-md-4  text-center">
        <div id="card" className="card overflow-hidden bg-dark-subtle">
          <img
            src={recipe.fields.image.fields.file.url}
            alt={recipe.fields.name}
            className="card-img-top"
          />
          <div className="card-body">
            <div className="card-title">
              <h4>{recipe.fields.name}</h4>
            </div>
            
            <div className="card-subtitle">
              <Alarm />
              {recipe.fields.info.time}
            </div>
            <div className="linkContainer">
              {/* Using the Link component to go to the Recipe Page */}
              <Link className="link" to={`/Home/${recipe.sys.id}`}>Take Me There</Link>
            </div> 
          </div>
        </div>
      </div>
    </>
  );
}
