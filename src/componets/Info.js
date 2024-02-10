function Info({btnBack}) {

    const arr = [{
        key: 'Phone',
        value: '098 557491'
    },
        {
            key: 'Email',
            value: 'gariksaroyan2@gmail.com'
        },
        {
            key: 'Linkedin',
            value: 'https://www.linkedin.com/in/garik-saroyan-2454911b4/'
        },
        {
            key: 'GitHub',
            value: 'https://github.com/GarikSaroyan'
        },

    ]

    return <>
        <div className='boxAbout'>
            <div className='boxName'>
                <div className='name'>Information</div>
            </div>
            <div className='text'>
                {arr.map((el, i) => <div key={i} className='textBox'>{i + 1}. {el.key} - {el.value[0]==='h'? <a href={el.value} target="_blank" style={{color:"white"}}>{el.value}</a>:el.value}</div>)}

            </div>

        </div>

        {btnBack()}

    </>

}

export default Info;
