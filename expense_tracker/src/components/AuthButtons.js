//src/components/Authbutton.js
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firebaseConnect, isLoaded, isEmpty } from 'react-redux-firebase'

import AuthButtonGoogle from "./AuthButtonGoogle"
import AuthButtonFB from "./AuthButtonFB"

class AuthButtons extends Component {
    static propTypes = {
        auth: PropTypes.object,
        firebase: PropTypes.shape({
            login: PropTypes.func.isRequired,
            logout: PropTypes.func.isRequired,
        }),
    }

    render () {
        if(!isLoaded(this.props.auth)){
            return null
        }
        if(isEmpty(this.props.auth)) {
            return(
                <div>   
                    <AuthButtonFB />
                    <AuthButtonGoogle />
                </div>
            )
        }
        return <button style={{width:"20rem"}} onClick={()=>this.props.firebase.logout()}>Logout</button>

    }
}

const mapStateToProps = state => {
    return {auth: state.firebase.auth}
}

const mapDispatchToProps = {
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect()
)(AuthButtons)