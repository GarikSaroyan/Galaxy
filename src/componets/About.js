
function About({menu}) {

    return <>
        <div className='boxAbout' >
            <div className='boxName'>
                <div className='name'>About Me</div>
            </div>
            <div className='text'>

                <b>Adaptability</b>: Demonstrated ability to adapt to new situations and environments,
                remaining
                flexible and
                open to change.
                <hr/>
                <b>Teamwork</b>: Adept at collaborating with diverse teams to accomplish tasks and projects,
                fostering a
                positive and inclusive work environment.

            </div>

        </div>

        <div className='btnBack'>
            <div className='btnMenu' style={{width: '80%'}} onClick={() => menu('')}> Back</div>
        </div>
    </>

}

export default About;
