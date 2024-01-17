function Experience({menu}) {

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Experience</div>
            </div>
            <div className='text'>
                <b> JUNIOR FULL STACK DEVELOPER /CODEWAVE<br/><br/></b>
                SEPTEMBER 2023 -PRESENT<br/>

                <hr/>
                <b>JUNIOR REACT , REACT NATIVE DEVELOPER /
                    ENERGAMING<br/><br/></b>
                MARCH 2020 – MAY 2021<br/>
                Learned to think ,understand problems and
                find the best solution from different angles.
                Learned to create web site,and track errors.
                Learned to work with someone elses code
                and debug it

            </div>

        </div>


        <div className='btnBack'>
            <div className='btnMenu' style={{width: '80%'}} onClick={() => menu('')}> Back</div>
        </div>
    </>

}

export default Experience;
