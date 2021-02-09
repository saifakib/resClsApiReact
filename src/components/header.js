import React from 'react';
import { newsCategory } from './newsCategory'
import { Context } from '../blockbusterheadline/useContext'

class Header extends React.Component {

    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    handleKeyPress = e => {
        if (e.key === 'Enter') {
            this.context.search(this.state.searchTerm)
        }
    }

    render() {
        return (
            <div className='my-4'>
                <h1 className="mb-4" style={{ fontWeight: '300' }}>
                    Block Buster HeadLines
                </h1>
                <input
                    type='text'
                    className="form-control"
                    placeholder="Type Something and Enter for Result"
                    value={this.state.searchTerm}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <div className="my-4">
                    {newsCategory &&
                        Object.keys(newsCategory).map(item => {
                            if (this.context.category === newsCategory[item]) {
                                return (
                                    <button onClick={() => this.context.changeCategory(newsCategory[item])} className="btn btn-sm btn-warning mr-2 mb-2">
                                        {`#${newsCategory[item]}`}
                                    </button>
                                )
                            }
                            return (
                                <button onClick={() => this.context.changeCategory(newsCategory[item])} className="btn btn-sm btn-light mr-2 mb-2">
                                    {`#${newsCategory[item]}`}
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

Header.contextType = Context;

export default Header;