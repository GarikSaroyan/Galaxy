function Languages({menu}) {

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Experience</div>
            </div>
            <div className='text'>
                • Armenian<br/>
                • English – B2<br/>
                • Russian<br/>
            </div>

        </div>


        <div className='btnBack'>
            <div className='btnMenu' style={{width: '80%'}} onClick={() => menu('')}> Back</div>
        </div>
    </>

}

export default Languages;
