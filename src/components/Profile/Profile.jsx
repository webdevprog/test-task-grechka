import React from 'react';
import { getProfile } from '../../redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';

class Profile extends React.Component {

    componentDidMount() {
        this.props.getProfile(this.props.match.params.profileId);
    }

    render() {
        return (
            <h1>{this.props.profile.firstName ? this.props.profile.firstName : 'test' }</h1>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

export default compose(
    connect(mapStateToProps, { getProfile }),
    withRouter
)(Profile)