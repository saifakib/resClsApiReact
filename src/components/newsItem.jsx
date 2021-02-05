import React from 'react'

function getDateString(dateTimeStr) {
    return new Date(dateTimeStr).toDateString();
}

const NewsItem = ({ item }) => {
    return (
        <div className="card mb-4">
            {item.urlToImage && (
                <img src={item.urlToImage} alt={item.title} />
            )}
            <div className="card-body">
                <a href={item.url} target='_blank' rel='nooperer noreferrer' style={{ color: '#424242' }}>
                    <h5 className="card-title">{item.title}</h5>
                </a>
                <a href={item.url} target='_blank' rel='nooperer noreferrer' style={{ color: '#424242' }}>
                    {item.content}
                </a>
                <div className="mt-2 d-flex align-item-center">
                    <small>
                        <strong>
                            published at {getDateString(item.publishedAt)}
                        </strong>
                    </small>
                    <div className="ml-auto" style={{
                        padding: '0.25rem 0.5rem',
                        background: '#ededed',
                        color: '#424242',
                        borderRadius: '0.25rem',
                        display: 'inline-block'
                    }}>
                        <small>{item.source.name}</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;