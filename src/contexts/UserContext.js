import React, { useState } from 'react'

const UserContext = React.createContext({
    loggedIn: null,
    setLoggedIn: () => { },
    userType: '',
    setUserType: () => { },
    user: {},
    setUser: () => { },
    applications: [],
    setApplications: () => { }
})

export default UserContext

export function UserProvider(props) {
    const [loggedIn, setLoggedIn] = useState(null)
    const [userType, setUserType] = useState('')
    const [user, setUser] = useState({})
    const [applications, setApplications] = useState([])

    const setLoggedInFn = loggedIn => {
        setLoggedIn(loggedIn)
    }

    const setUserTypeFn = userType => {
        setUserType(userType)
    }

    const setUserFn = user => {
        setUser(user)
    }

    const setApplicationsFn = applications => {
        setApplications(applications)
    }


    const value = {
        loggedIn: loggedIn,
        setLoggedIn: setLoggedInFn,
        userType: userType,
        setUserType: setUserTypeFn,
        user: user,
        setUser: setUserFn,
        applications: applications,
        setApplications: setApplicationsFn
    }

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    )
}