/* Import Alarm Icon Component from react-bootstrap-icons */
import { Alarm } from "react-bootstrap-icons";

/* Import Link Component from react-router-dom */
import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
  
  return (
    <>
      <div className="col-lg-3 col-md-4  text-center">
        <div className="card overflow-hidden bg-dark-subtle">
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

              {/* Using the Link component to go to the Recipe Page */}

              <Link to={`Home/${recipe.sys.id}`}>Take Me There</Link>
            

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
