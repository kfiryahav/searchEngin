import React from 'react';

const List = (props) => {
    return (
        <>
            {props.pictues.map(item => {
                return (
                    <div key={item.id} className="col-md">
                        <a href={item.webformatURL} target="_blank">
                            <img src={item.webformatURL} className="card-img-top img-responsive rounded shadow" alt={item.tags} />
                        </a>
                        <div className="card-body">
                            <div><span className="fw-bold">Views: </span>{item.views}</div>
                            <div><span className="fw-bold">Likes:</span> {item.likes}</div>
                            <div><span className="fw-bold">Downloads:</span> {item.downloads}</div>
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default List;
