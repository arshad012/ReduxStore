import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './itemDetail.css';

const ItemDetail = () => {
    const [item, setitem] = useState({});
    const [status, setStatus] = useState({
        loading: true,
        error: false
    });
    const {id} = useParams();

    useEffect(() => {
        fetchItems()
    },[])

    const fetchItems = async () => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
            const data = await res.json();
            console.log('data:', data);
            setStatus(prev => {
                return {...prev, loading:false}
            });
            setitem(data);
        } catch (error) {
            console.log('error:', error);
            setStatus(prev => {
                return {...prev, loading:false, error: true}
            });
        }
    }

    return status.loading ? 
        <h1 style={{textAlign: 'center'}}>Loading...</h1> : status.error ? 
        <h1 style={{textAlign: 'center'}}>Oops! something went wrong !</h1> : (
        <div className='itemDetail'>
            <h1>Detail Page For Post With ID</h1>
            <img src="https://picsum.photos/200?random=9" alt="" width='200px' />
            <p>User Id : {item.userId}</p>
            <p>Title : {item?.title}</p>
            <p>Body : {item?.body}</p>
        </div>
    )
}

export default ItemDetail;
