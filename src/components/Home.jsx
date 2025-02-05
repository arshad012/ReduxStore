import { useEffect, useState } from 'react';
import { useSelector, useDispatch, Provider } from "react-redux";

import { fetchItems } from '../redux/ItemsSlice';
import './Home.css';
import Item from './Item';

const Home = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    const {items, status, error} = useSelector(state => state.items);

    useEffect(() => {
        dispatch(fetchItems());
    },[])

    useEffect(() => {
        setData(items);
    },[items])


    return status == 'loading' ? <h1 style={{textAlign: 'center'}}>Loading...</h1> : (
        <div>
            <h1 className='heading'>Social Media App</h1>
            <hr />
            <div className='itemsContainer'>
                {
                    data.map((item) => <Item key={item.id} item={item} />)
                }
            </div>
        </div>
    )
}

export default Home;
