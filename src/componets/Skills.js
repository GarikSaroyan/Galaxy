function Skills({menu}) {

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Skills</div>
            </div>

            <div className='text'>
                • JavaScript(ES5/ES6+)<br/>
                • HTML/CSS<br/>
                • ReactJs / Redux<br/>
                • React Native<br/>
                • NodeJS (express)<br/>
                • PHP (Yii framework)<br/>
                • C++ (small experience)<br/>
                • TypeScript<br/>
                • Python (small experience)<br/>
                • Git / GitHub<br/>
                • SQL/MYSQL<br/>

            </div>

        </div>


        <div className='btnBack'>
            <div className='btnMenu' style={{width: '80%'}} onClick={() => menu('')}> Back</div>
        </div>
    </>

}

export default Skills;
