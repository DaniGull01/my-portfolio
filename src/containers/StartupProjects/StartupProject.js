import React, {useContext, useState} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const {isDark} = useContext(StyleContext);

  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  if (!bigProjects.display) {
    return null;
  }

  const totalSlides = Math.ceil(bigProjects.projects.length / 2);

  const goToNextSlide = () => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const goToPrevSlide = () => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  // Get current visible projects (3 at a time)
  const visibleProjects = bigProjects.projects.slice(
    currentSlide * 2,
    currentSlide * 2 + 2
  );

  // SVG arrows based on theme
  const leftArrow = isDark ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const rightArrow = isDark ? (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="#FFFFFF"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ) : (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{bigProjects.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {bigProjects.subtitle}
          </p>

          <div className="slider-container">
            <button
              className={`slider-button prev ${isDark ? "dark-mode" : ""}`}
              onClick={goToPrevSlide}
              aria-label="Previous slide"
            >
              {leftArrow}
            </button>

            <div className="projects-container">
              {visibleProjects.map((project, i) => {
                return (
                  <div
                    key={i}
                    className={
                      isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                  >
                    {project.image ? (
                      <div className="project-image">
                        <img
                          src={project.image}
                          alt={project.projectName}
                          className="card-image"
                        ></img>
                      </div>
                    ) : null}
                    <div className="project-detail">
                      <h5
                        className={
                          isDark ? "dark-mode card-title" : "card-title"
                        }
                      >
                        {project.projectName}
                      </h5>
                      <p
                        className={
                          isDark ? "dark-mode card-subtitle" : "card-subtitle"
                        }
                      >
                        {project.projectDesc}
                      </p>
                      {project.footerLink ? (
                        <div className="project-card-footer">
                          {project.footerLink.map((link, i) => {
                            return (
                              <span
                                key={i}
                                className={
                                  isDark
                                    ? "dark-mode project-tag"
                                    : "project-tag"
                                }
                                onClick={() => openUrlInNewTab(link.url)}
                              >
                                {link.name}
                              </span>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              className={`slider-button next ${isDark ? "dark-mode" : ""}`}
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              {rightArrow}
            </button>
          </div>

          <div className="slider-dots">
            {Array.from({length: totalSlides}).map((_, index) => (
              <span
                key={index}
                className={`slider-dot ${
                  currentSlide === index ? "active" : ""
                } ${isDark ? "dark-mode" : ""}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
