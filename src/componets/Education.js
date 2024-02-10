function Education({btnBack}) {

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Education</div>
            </div>
            <div className='text'>
                <div className='textBox'>
                    <b>UNIVERSITY` SYNOPSYS ARMENIA<br/><br/></b>
                    MAY 2021<br/>
                    Faculty Bachelor, Microelectronics

                </div>
                <div className='textBox'>
                    <b>NATIONAL POLYTECHNIC UNIVERSITY OF
                        ARMENIA<br/><br/></b>
                    SEPTEMBER 2019<br/>
                    Faculty Bachelor, Cybernetics
                </div>
            </div>

        </div>


        {btnBack()}

    </>

}

export default Education;
