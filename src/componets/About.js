function About({btnBack}) {

    const arr = [' Adaptability: Demonstrated ability to adapt to new situations and environments,\n' +
    '                    remaining\n' +
    '                    flexible and\n' +
    '                    open to change.',
        `Leadership: Proven capacity to lead and motivate teams towards achieving common goals, showcasing strong decision-making skills.`,
        `Communication Skills: Excellent verbal and written communication skills, with the ability to convey complex ideas clearly and concisely.`,
        `Teamwork: Adept at collaborating with diverse teams to accomplish tasks and projects,
                    fostering a
                    positive and inclusive work environment.`,
        `Problem Solving: Strong analytical and problem-solving skills, with a track record of finding effective solutions in challenging situations.`,
        `Initiative: Proactive in taking on new responsibilities and challenges, showing a willingness to go above and beyond expectations.`,
        `Time Management: Efficiently manage time and prioritize tasks to meet deadlines, demonstrating strong organizational skills.`,
        `Adherence to Detail: Meticulous attention to detail, ensuring accuracy in all tasks and deliverables.`,
        `Creativity: Ability to think creatively and innovatively, bringing fresh ideas to the table and contributing to a culture of continuous improvement.`,
        `Resilience: Demonstrated ability to bounce back from setbacks, maintaining a positive attitude and commitment to long-term goals.`,
        `Technical Proficiency: Ability to quickly learn and adapt to new technologies.`,
        `Conflict Resolution: Skillful in resolving conflicts and disagreements in a constructive manner, fostering a harmonious work environment.`,
        `Continuous Learning: Commitment to continuous self-improvement and professional development, staying abreast of industry trends and best practices.`,
    ]

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>About Me</div>
            </div>
            <div className='text'>
                {arr.map((el, i) => <div key={i} className='textBox'>{i + 1}. {el}</div>)}

            </div>

        </div>

        {btnBack()}

    </>

}

export default About;
