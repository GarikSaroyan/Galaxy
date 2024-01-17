import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Languages from "./Languages";

function Menu() {
    const [openMenu, setOpenMenu] = useState(0)
    const [MenuType, setMenuType] = useState('' +
        '')

    const open = () => setOpenMenu(openMenu ? 0 : 1)

    const menu = el => setMenuType(el)

    const menuArr = ['About', 'Education', 'Experience', 'Skills', 'Languages']

    return <>
        <div className='menu' onClick={open}>
            <div className='iconMenu'/>
            <h2 className='textMenu'>Menu</h2>
        </div>

        <div className='boxMenu' style={{opacity: openMenu}}>
            <div className='boxCenter'>
                {MenuType === '' && menuArr.map(el => <div key={el} className='btnMenu'
                                                           style={{opacity: MenuType === '' ? 1 : 0}}
                                                           onClick={() => menu(el)}>{el}</div>)}
                {
                    MenuType === 'About' && <About menu={menu} MenuType={MenuType}/> ||
                    MenuType === 'Education' && <Education menu={menu} />||
                    MenuType === 'Experience' && <Experience menu={menu} />||
                    MenuType === 'Skills' && <Skills menu={menu} />||
                    MenuType === 'Languages' && <Languages menu={menu} />

                }



            </div>

        </div>

    </>
}

export default Menu;
