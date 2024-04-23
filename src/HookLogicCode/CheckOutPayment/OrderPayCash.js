import React from 'react'

const OrderPayCash = () => {

    // when change address by user
    const handleChooseAddress = (e) => {
        console.log(e.target.value);
      };
      
      return [handleChooseAddress]
}

export default OrderPayCash
