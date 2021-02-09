import React from 'react'
import { Consumer } from '../blockbusterheadline/useContext'

const ActivityInfo = () => {
    return (
        <Consumer>
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
        </Consumer>

    )
}

export default ActivityInfo;