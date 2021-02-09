import React from 'react'
import NewsItem from './newsItem'
import Context from '../blockbusterheadline/useContext';

const NewsList = () => {
    return (
        <Context.Consumer>
            {({article}) => (
                <div>
                    {article && article.length === 0 && <h4>There is no news</h4>}
                    {article && article.map(item => <NewsItem key={item.title} item={item} />)}
                </div>
            )}
        </Context.Consumer>
    )
}

export default NewsList;
