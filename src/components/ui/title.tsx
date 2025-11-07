import React from 'react'

interface ITitle {
    title: string
}

const Title = ({ title }: ITitle) => {
    return (
        <h3 className={`text-5xl mb-[60px] leading-[130%] font-bold`}>{title}</h3>
    )
}

export default Title