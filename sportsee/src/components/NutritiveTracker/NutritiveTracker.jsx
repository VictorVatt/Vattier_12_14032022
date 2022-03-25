import calorieIcon from '../../assets/calorie-icon.svg'
import proteineIcon from '../../assets/proteine-icon.svg'
import glucideIcon from '../../assets/glucide-icon.svg'
import lipideIcon from '../../assets/lipide-icon.svg'
import NutritiveCard from '../NutritiveCount/NutritiveCard'
import styled from 'styled-components'

import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ApiProvider from '../../Api/ApiProvider.js'

function NutritiveTracker( { id } ) {

    let [ data, setData ] = useState({})

    useEffect(() => {
        new ApiProvider().getMainUserData(id)
            .then( res => setData(res.keyData))
    }, [id])
    return (
        <NutritiveTrackerContainer>
            <NutritiveCard backgroundColor={"rgba(255, 0, 0, 0.1)"} 
                           icon={calorieIcon} 
                           unity={"kCal"}
                           type={"Calories"}
                           quantity={data.calorieCount}
                           />
            <NutritiveCard backgroundColor={"rgba(74, 184, 255, 0.1)"} 
                           icon={proteineIcon} 
                           unity={"g"}
                           type={"Calories"}
                           quantity={data.proteinCount}
                           />
            <NutritiveCard backgroundColor={"rgba(249, 206, 35, 0.1)"} 
                           icon={glucideIcon} 
                           unity={"g"}
                           type={"Calories"}
                           quantity={data.carbohydrateCount}
                           />
            <NutritiveCard backgroundColor={"rgba(253, 81, 129, 0.1)"} 
                           icon={lipideIcon} 
                           unity={"g"}
                           type={"Calories"}
                           quantity={data.lipidCount}
                           />
        </NutritiveTrackerContainer>
    )
}

const NutritiveTrackerContainer = styled.div`

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    @media (min-width: 1440px) {
        display: block;
    }`

NutritiveTracker.propTypes = {
    id : PropTypes.number.isRequired
}

export default NutritiveTracker