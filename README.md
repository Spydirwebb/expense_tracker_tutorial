[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/Spydirwebb/expense_tracker_tutorial)

https://dusty.phillips.codes/2018/08/25/react-redux-firebase-with-firestore-tutorial/
# expense_tracker_tutorial
React-redux-firebase practice


#expense tracker tutorial

#authorization
set up auth button components
	firebase.login({provider: "google", type: "popup"})

get proptypes from firebase
	static propTypes = {
        auth: PropTypes.object,
        firebase: PropTypes.shape({
            login: PropTypes.func.isRequired,
            logout: PropTypes.func.isRequired,
        }),
    }
conditionally render
	if its not loaded
		if !isLoaded => null
	if not logged in
		if(isEmpty(this.props.auth) => login buttons
	if logged in
		=> Logout
			firebase.logout()

map state to props
	=> {auth: state.firebase.auth}

mapDipsatchToProps => {}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firebaseConnect()
)(AuthButtons)