import { useEffect, useState } from 'react';
import {Person, DiamondFill, Alarm, Globe } from 'react-bootstrap-icons';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import getRapidSngl from '../hooks/getRapidSngl';


export default function RapidApiSinglePage() {
  const {ID} = useParams()
  const [SingleRecipe, setSingleRecipe] = useState(null)
  
   useEffect(()=> {
    getRapidSngl(ID)
    .then((res)=>setSingleRecipe(res))
    .catch((err)=> console.log("From RapidApiSinglePage:::", err))
  }, [ID]) 
  console.log(SingleRecipe)

  return (
    <div>
      <h1>This is Single Recipe Page from Rapid Api</h1>
      { <Container key={SingleRecipe?.title}>
            <section className="p-5 bg-body-tertiary mt-5">
              <div className="container d-flex justify-content-between">
                <div>
                  <img
                    src={SingleRecipe?.image}
                    alt={SingleRecipe?.title}
                    className="rounded-3 d-none d-lg-block"
                  />
                </div>
                <div className="container  text-lg-start text-center">
                  <h1 className="mb-lg-3">{SingleRecipe?.title}</h1>
                  <hr className="m-lg-auto w-100 mb-lg-3"></hr>
                  <div>
                    <div>
                      <Person />
                      SERVES: {SingleRecipe?.servings}
                    </div>
                    <div>
                      <Alarm />
                      COOKS IN: {SingleRecipe?.readyInMinutes} mins
                    </div>
                    <div>
                      <Globe />
                      <a href={SingleRecipe?.sourceUrl } target='_blank'> Source</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="p-5 bg-body-secondary method">  
              <div className="container d-lg-flex">
                <div className="container text-center text-lg-start ingredients">
                <h3>Ingredients</h3>
                {SingleRecipe?.extendedIngredients.map((ingredient, index) => (
                  <span key={index}>
                    {index + 1}. {ingredient.originalName} <DiamondFill className="d-lg-none d-sm-inline-block" /> <br className="d-none d-lg-block" />
                  </span>
                ))}
                </div>
                <div className="container text-lg-start text-center">

                <h2>Method</h2>
                {SingleRecipe?.analyzedInstructions[0].steps.map((step, index) => (
                  <p key={index} className="lead">
                    <h4>Step {step.number}.</h4> 
                    
                    {step.step}
                  </p>
                ))} 
                </div>
              </div>
              <div>
              </div>
            </section>
          </Container> }
    </div>
  )
}
