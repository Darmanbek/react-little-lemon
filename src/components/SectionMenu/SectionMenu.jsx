import React from 'react';
import { menuData } from './menuData';
import MenuBlock from './MenuBlock/MenuBlock';
import "./sectionMenu.css";

const SectionMenu = () => {
    return (
        <section className="section-menu">
            <div className="container">
                <div className="menu-inner">
                    <div className="menu-title">
                        <h1>This weeks specials!</h1>
                        <button>Online Menu</button>
                    </div>
                    <div className="menu-list">
                        {menuData.map(item => (
                            <MenuBlock 
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                                desc={item.desc}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionMenu;