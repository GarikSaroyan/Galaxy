function Skills({btnBack}) {
    const arrSkills = ['JavaScript(ES5/ES6+)', 'HTML/CSS', 'ReactJs / Redux', 'React Native',
        'NodeJS (express)', 'PHP (Yii framework)', 'C++ (small experience)', 'TypeScript', 'Python (small experience)', 'Git / GitHub', 'SQL/MYSQL']
    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Skills</div>
            </div>

            <div className='text'>
                {arrSkills.map((el, i) => <div  key={i} className='textBox'>{i + 1}. {el}</div>)}
            </div>

        </div>


        {btnBack()}

    </>

}

export default Skills;
