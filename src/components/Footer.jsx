import { Container } from "react-bootstrap";
import { Facebook, Twitter, Google, Instagram, } from "react-bootstrap-icons";

export default function Footer() {
  return (
      <Container>
        <footer className="text-center text-lg-start bg-white text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>

            <div>
              <a href="" className="me-4 link-secondary">
                <Facebook/>
              </a>
              <a href="" className="me-4 link-secondary">
                <Twitter/>
              </a>
              <a href="" className="me-4 link-secondary">
                <Google/>
              </a>
              <a href="" className="me-4 link-secondary">
                <Instagram/>
              </a>
             
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">
                    <i className="fas fa-gem me-3 text-secondary"></i>EatsExplorer
                  </h6>
                  <p>
                  Your gateway to a world of culinary delight,an innovative recipe API that seamlessly connects food enthusiasts with a diverse array of mouthwatering recipes, fostering a journey of exploration and taste discovery
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Catering
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Fitness Diets
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Fitness Gadgets
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Supplements
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3 text-secondary"></i> New York, NY
                    10012, US
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3 text-secondary"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3 text-secondary"></i> + 01 234
                    567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3 text-secondary"></i> + 01 234
                    567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div
            className="text-center p-4"
            
          >
            © 2023 Copyright:
            <a className="text-reset fw-bold" href="https://github.com/M-Pedrami" target="_blank">
              Maziar Pedrami
            </a>
          </div>
        </footer>
      </Container>
    
  );
}
