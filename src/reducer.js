export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: 'BQCVh4M3Bxd7uz6z7Tc8ENKLB-OzW0m-LnfpO_aTq85AJoaTRvus0i2RFAo3ld0EgoA8wzHjllSJbjlKlgmAvbMNvyTBRAlerZ2vUeD98ZP8_8EYrZPcjzOnEdlpWnBitROyS7aEmGSBgftT-Q1z_19tJyEX4EW_GEe4sKH3MtOMk6JwKK8ylGS-byTZ0s6g0tEnIfUlZn4iV_amJyTW',
};

const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly:action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;