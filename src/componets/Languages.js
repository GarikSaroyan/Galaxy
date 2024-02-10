function Languages({btnBack}) {
    const arrLanguages = ['Armenian','English – B2','Russian']
    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Languages</div>
            </div>
            <div className='text'>
                {arrLanguages.map((el, i) => <div key={i} className='textBox'>{i + 1}. {el}</div>)}
            </div>

        </div>


        {btnBack()}
    </>

}

export default Languages;
