import React from 'react';
import './Items.css';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    let { id, body, title, userId } = item;

    title = title.slice(0, 15);
    body = body.slice(0, 40);

    return (
        <div className='item'>
            <Link to={`item/${id}`}>
                <img src="https://picsum.photos/200?random=9" alt="" width='100%' />
                <p>User ID: {userId}</p>
                <p>Title: {title}...</p>
                <p>Body: {body} <br />Read More...</p>
            </Link>
        </div>
    )
}

export default Item;
