import React, { useEffect, useState } from 'react'
import GoBackBtn from '../components/GoBackBtn'
import BetweenLine from '../components/BetweenLine'
import AboutBook from '../components/AboutBook'
import ShortProfileImam from '../components/ShortProfileImam'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CollectionsPage = () => {
    const params = useParams()
    const name = params.name

    return (
        <>
            <GoBackBtn page={"Home"} />
            <ShortProfileImam profilePage={false} name={name} />
            <BetweenLine />
            <AboutBook name={name} />
            <BetweenLine />
        </>
    )
}

export default CollectionsPage