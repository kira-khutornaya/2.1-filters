import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function ProjectList({ projects }) {
  return (
    <div className="projects">
      {
        projects.map((project) => (
          <img
            className="projects__item"
            src={project.img}
            alt=""
            key={nanoid()}
          />
        ))
      }
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.exact({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ProjectList;
