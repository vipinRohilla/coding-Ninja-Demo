import React from 'react'
import './Pagination.css'
export const Pagination = ({postsPerPage, totalPosts, paginate, e}) => {
    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <div>
            <nav>
                <ul className="pagination">
                    {
                        pageNumbers.map(number => (
                            <li key ={number} className='page-item'>
                                <button onClick={()=> {paginate(number)}} className='page-link'>
                                    {number}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </nav>
        </div>
    )
}
