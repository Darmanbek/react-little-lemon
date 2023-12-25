import React, { useState } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Modal, message } from "antd"
import "./menuBlock.css";

const { confirm } = Modal

const MenuBlock = ({ image, title, price, desc } ) => {

    const ClickOrder = () => {
        confirm({
            title: 'Do you want to confirm order?',
            icon: <ExclamationCircleFilled />,
            content: 'You won\'t able to revert this!',
            okText: 'Yes, order it!',
            cancelText: 'No, I think',
            onOk() {
              console.log({
                title: title,
                price: price,
                desc: desc
              });
              message.success('Orderd!');
            },
            onCancel() {
              console.log({});
              message.error('Canceled!');
            },
        });
    }


    return (
            <div className="menu-block">
                <div className="menu-block_image">
                    <img src={image} alt="Menu Image" />
                </div>
                <div className="menu-block_content">
                    <div className="menu-block_header">
                        <h4>{title}</h4>
                        <span>{`$${price}`}</span>
                    </div>
                    <div className="menu-block_desc">
                        <p>{desc}</p>
                    </div>
                    <div className="menu-block_button">
                        <button onClick={ClickOrder}>Order Now</button>
                    </div>  
                </div>
            </div>
    )
}

export default MenuBlock;