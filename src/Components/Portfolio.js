import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';
import ProjectModel from '../models/ProjectModel';

function Portfolio({ projects, filters }) {
  const [{ selected, filterData }, setSelected] = useState({ selected: 'All', filterData: projects });

  const onSelectFilter = (e) => {
    setSelected(() => {
      const filter = e.target.textContent;

      return {
        selected: filter,
        filterData: projects.filter((item) => filter === 'All' || filter === item.category),
      };
    });
  };

  return (
    <div className="portfolio">
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={onSelectFilter}
      />

      <ProjectList projects={filterData} />
    </div>
  );
}

Portfolio.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.instanceOf(ProjectModel),
  ).isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.string,
  ).isRequired,
};

export default Portfolio;
