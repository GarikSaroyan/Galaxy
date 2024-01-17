
function Education({menu}) {

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Education</div>
            </div>
            <div className='text'>
                <b>UNIVERSITY` SYNOPSYS ARMENIA<br/><br/></b>
                MAY 2021<br/>
                Faculty Bachelor, Microelectronics
                <hr/>
                <b>NATIONAL POLYTECHNIC UNIVERSITY OF
                    ARMENIA<br/><br/></b>
                SEPTEMBER 2019<br/>
                Faculty Bachelor, Cybernetics

            </div>

        </div>


        <div className='btnBack'>
            <div className='btnMenu' style={{width: '80%'}} onClick={() => menu('')}> Back</div>
        </div>
    </>

}

export default Education;
