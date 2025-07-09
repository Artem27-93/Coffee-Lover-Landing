import React, {useState} from "react";

export const Navigation = (props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div style={{display:"flex",justifyContent:"left"}}>
            <div className="navbar-header">
              <button
                  type="button"
                  className="navbar-toggle collapsed"
                  onClick={handleAccordionToggle}
              >
                {" "}
                <span className="sr-only">Toggle navigation</span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
                <span className="icon-bar"></span>{" "}
              </button>
            </div>

            <div className="navbar-brand-wrapper">
              <a className="navbar-brand page-scroll" href="#page-top">
                Coffee Lover
              </a>{" "}
            </div>
          <div
              className={`collapse navbar-collapse`}
              id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
              <a href="#features" className="page-scroll">
                  Трішки теорії
                </a>
              </li>
              <li>
                <a href="#about" className="page-scroll">
                  Про каву
                </a>
              </li>
              <li>
                <a href="#services" className="page-scroll">
                  Фільтр-кава
                </a>
              </li>
              <li>
                <a href="#portfolio" className="page-scroll">
                  Колекція смаків
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  Контакти
                </a>
              </li>
            </ul>
          </div>
        </div>
          {isAccordionOpen && (
              <div className="accordion-menu">
                <ul className="accordion-list">
                  <li className="accordion-li">
                    <a
                        href="#features"
                        className="page-scroll accordion-link"
                        onClick={handleAccordionToggle}
                    >
                      Трішки теорії
                    </a>
                  </li>
                  <li className="accordion-li">
                    <a
                        href="#about"
                        className="page-scroll accordion-link"
                        onClick={handleAccordionToggle}
                    >
                      Про каву
                    </a>
                  </li>
                  <li className="accordion-li">
                    <a
                        href="#services"
                        className="page-scroll accordion-link"
                        onClick={handleAccordionToggle}
                    >
                      Фільтр-кава
                    </a>
                  </li>
                  <li className="accordion-li">
                    <a
                        href="#portfolio"
                        className="page-scroll accordion-link"
                        onClick={handleAccordionToggle}
                    >
                      Колекція смаків
                    </a>
                  </li>
                  <li className="accordion-li">
                    <a
                        href="#contact"
                        className="page-scroll accordion-link"
                        onClick={handleAccordionToggle}
                    >
                      Контакти
                    </a>
                  </li>
                </ul>
              </div>
          )}
        </div>
      </nav>
  );
};
