import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getUser } from '../../redux/actions/userActions'

import './styles.css'


const Connect = ({ user, auth, dispatchGetUser }) => {


    useEffect(() => dispatchGetUser(auth.id),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <div className='connect'>
            <h2 className='connect_title'>Connect your wallet</h2>
            <p className='connect_subtitle'>Connect with one of our available wallet providers or create a new one.</p>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatchGetUser: (id) =>
        dispatch(getUser(id))
})

const mapStateToProps = (state) => ({
    auth: state.auth,
    user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Connect)