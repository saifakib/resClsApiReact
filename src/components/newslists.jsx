import React from 'react'
import NewsItem from './newsItem'
import { Consumer } from '../blockbusterheadline/useContext';

const NewsList = () => {
    return (
        <Consumer>
            {({article}) => (
                <div>
                    {article && article.length === 0 && <h4>There is no news</h4>}
                    {article && article.map(item => <NewsItem key={item.title} item={item} />)}
                </div>
            )}
        </Consumer>
    )
}

export default NewsList;
