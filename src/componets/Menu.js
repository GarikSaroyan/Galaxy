import {useEffect, useState} from "react";
import {logDOM} from "@testing-library/react";

function Menu() {
    const [openMenu, setOpenMenu] = useState(0)
    const [MenuType, setMenuType] = useState('')

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
                {/*{menuArr.map(el => <div className='btnMenu' onClick={() => menu(el)}>{el}</div>)}*/}
                <div className='boxAbout'>
                    <div className='boxName'>
                            <h1>About</h1>
                    </div>

                </div>

            </div>

        </div>

    </>
}

export default Menu;
