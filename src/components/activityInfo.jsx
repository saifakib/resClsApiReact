import React from 'react'

const ActivityInfo = props => {
    return (
        <div className="d-flex">
            <p className="text-black-50">
                About {props.totalResults} results found
        </p>
            <p className="text-black-50 ml-auto">
                {props.currentPage} page to {props.totalPage}
            </p>
        </div>
    )
}

export default ActivityInfo;