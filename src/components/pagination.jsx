import React, { Component } from 'react'

export class Pagination extends Component {
    state = {
        isEditable: false
    }
    render() {
        const {
            isNext,
            isPrivious,
            next,
            privious,
            currentPage,
            totalPage,
            handlePageChange,
            gotoPage
        } = this.props;
        console.log(totalPage, currentPage)
        return (
            <div className="d-flex my-5 align-items-center justify-contents-center">
                <button className="btn btn-warning" disabled={!isPrivious} onClick={() => privious()}>Privious</button>
                <div className="flex-grow-1 text-center">
                    {this.state.isEditable ? (
                        <input type="number" value={currentPage}
                            onChange={(e) => handlePageChange(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    gotoPage()
                                    this.setState({ isEditable: false })
                                }
                            }}
                        />
                    ) : (
                            <p style={{ userSelect: 'none', lineHeight: '1.1' }}
                                onDoubleClick={() => {
                                    this.setState({ isEditable: !this.state.isEditable })
                                }}
                            >
                                {currentPage} of {totalPage}
                                <br />
                                <small>Double tap to edit</small>
                            </p>
                        )}
                </div>
                <button className="btn btn-warning" disabled={!isNext} onClick={() => next()}>Next</button>
            </div>
        )
    }
}

export default Pagination
