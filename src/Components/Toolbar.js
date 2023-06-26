/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

function Toolbar({ filters, selected, onSelectFilter }) {
  const selectedClass = (value) => (
    selected === value ? 'toolbar-list-item__selected' : null
  );

  return (
    <div className="toolbar">
      <ul className="toolbar__list">
        {
          filters.map((filter) => (
            <li
              className={`toolbar-list__item ${selectedClass(filter)}`}
              onClick={onSelectFilter}
              key={nanoid()}
            >
              {filter}
            </li>
          ))
        }
      </ul>
    </div>
  );
}

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func.isRequired,
};

Toolbar.defaultProps = {
  selected: 'All',
};

export default Toolbar;
