import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
    console.log(currentPage)

    const countPages = Math.ceil(itemsCount / pageSize);
    // console.log(countPages);

    if (countPages === 1) return null;

    const pages = _.range(1, countPages + 1);

    return ( 
        <nav>
            <ul className="pagination">
            {pages.map(page => (
                <li key={page} className={page===currentPage ? "page-item active" : "page-item"} >
                    <a className="page-link" onClick={() => onPageChange(page)} style={{cursor:'pointer'}}>{page}</a>
                </li>
            ))}             
            </ul>
        </nav>
     );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired, 
    pageSize: PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;