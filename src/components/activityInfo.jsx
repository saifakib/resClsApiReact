import React from 'react'
import Context from '../blockbusterheadline/useContext'

const ActivityInfo = () => {
    return (
        <Context.Consumer>
            {({ totalResults, currentPage, totalPage}) => (
                <div className="d-flex">
                    <p className="text-black-50">
                        About {totalResults} results found
                    </p>
                    <p className="text-black-50 ml-auto">
                        {currentPage} page to {totalPage}
                    </p>
                </div>
            )}
        </Context.Consumer>

    )
}

export default ActivityInfo;