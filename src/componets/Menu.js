import {useState} from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Skills from "./Skills";
import Languages from "./Languages";
import Info from "./Info";

function Menu() {
    const [openMenu, setOpenMenu] = useState(0)
    const [MenuType, setMenuType] = useState('')

    const open = () => {
        setOpenMenu(openMenu ? 0 : 1)
        setTimeout(() => setMenuType(''), 800)

    }


    const menu = el => setMenuType(el)

    const btnBack = ()=>  <div className='btnBack'>
        <div className='btnMenu animatedCard2' style={{width: '80%'}} onClick={() => menu('')}><span>Back</span></div>
    </div>

    const menuArr = ['Information','About Me', 'Education', 'Experience', 'Skills', 'Languages']


    return <>
        <div className='menu' onClick={open}>
            <div className='iconMenu'/>
            <h2 className='textMenu'>Menu</h2>
        </div>

        <div className='boxMenu' style={{opacity: openMenu}}>
            <div className='boxCenter'>

                {
                    {
                        'Information': <Info btnBack={btnBack}/>,
                        'About Me': <About btnBack={btnBack}/>,
                        'Education': <Education btnBack={btnBack}/>,
                        'Experience': <Experience btnBack={btnBack}/>,
                        'Skills': <Skills btnBack={btnBack}/>,
                        'Languages': <Languages btnBack={btnBack}/>,
                        '': menuArr.map(el => <div key={el} className='btnMenu animatedCard2'
                                                   style={{opacity: MenuType === '' ? 1 : 0}}
                                                   onClick={() => menu(el)}><span>{el}</span></div>),
                    }[MenuType]
                }
            </div>

        </div>

    </>
}

export default Menu;
