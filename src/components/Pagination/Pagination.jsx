import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Pagination.module.css';

const Pagination = ({ pageNumbers, selectedPage, handlePageSelect }) => {
  return (
    <div className={styles.paginationContainer}>
      <ul className={styles.paginationList}>
        {pageNumbers.map(pageNumber => (
          <li
            className={classNames(styles.paginationElement, {
              [styles.selectedPage]: selectedPage === pageNumber,
            })}
            onClick={() => handlePageSelect(pageNumber)}
            key={pageNumber}
          >
            {pageNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number),
  selectedPage: PropTypes.number,
  handlePageSelect: PropTypes.func,
};

export default Pagination;
