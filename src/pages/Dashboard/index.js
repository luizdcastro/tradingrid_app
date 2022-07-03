import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { getUser } from '../../redux/actions/userActions'
import BotCard from '../../components/BotCard'
import One from '../../assets/images/0.png'

import './styles.css'

const Dashboard = ({ user, auth, dispatchGetUser }) => {

    useEffect(() => dispatchGetUser(auth.id),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [])

    return (
        <div className='dashboard'>
            <div>
                <h2 className='exchanges_title'>Dashboard</h2>
                <p className='exchanges_subtitle'>Monitor your trading results and stay tuned for the best market strategies.</p>
            </div>
        
            {user?.bots?.map((item) => (
                <BotCard
                    key={item.name}
                    bot_id={item.id}
                    name={item.name}
                    image={One}
                    growth={item.growth.toFixed(2)}
                    profit={item.profit.toFixed(2)}
                    status={item.active}
                />
            ))}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)