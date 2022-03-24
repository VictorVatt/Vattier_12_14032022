import { MainTitle, HeaderContent } from "../../pages/HomeStyle.jsx"
import ApiProvider from "../../Api/ApiProvider.js"
import { useEffect, useState } from "react"
import PropTypes from "prop-types"

function Welcome( { id } ) {

    let [ data, setData ] = useState()

    useEffect(() => {
        new ApiProvider().getMainUserData(id)
            .then( res => setData(res.firstName))
    }, [id])

    return (
        <div>
            <MainTitle>Bonjour <span style={{color: '#FF0000'}}>{data}</span></MainTitle>
            <HeaderContent>Félicitation ! Vous avez explosé vos objectifs hier 👏</HeaderContent>
        </div>
    )
}

Welcome.propTypes = {
    id : PropTypes.number.isRequired
}

export default Welcome