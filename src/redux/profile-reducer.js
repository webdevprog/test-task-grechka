import { profileApi } from "../api/api";

const SET_PROFILE = 'SET_PROFILE';

let initialState = {
    profile: null,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROFILE :
            return {
                ...state,
                profile: !state.profile ? {...action.profile} : null
            }
        default:
            return state;
    }
}

export const setProfile = (profile) => ({type: SET_PROFILE, profile});

export const getProfile = (profileID) => {
    return (dispatch) => {
        profileApi.getProfile(profileID).then(data => {
            dispatch(setProfile(data));
        });
    }
}

export default profileReducer;