import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>Hey there!! Who are you?</h2>
            <h5>{user ? user.displayName : 'No one'}</h5>
        </div>
    );
};

export default Products;