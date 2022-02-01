import React from 'react';

const List = (props) => {
    return (
        <>
            {props.pictues.map(item => {
                return (
                    <div key={item.id} className="col-md">
                        <a href={item.webformatURL}>
                            <img src={item.webformatURL} className="card-img-top img-responsive rounded shadow" alt={item.tags} />
                        </a>
                        <div className="card-body">
                            <div className="div">Views: {item.views}</div>
                            <div className="div">Likes: {item.likes}</div>
                            <div className="div">Downloads: {item.downloads}</div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default List;
