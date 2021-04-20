const Login = (username,password) => {
    if( username === "root" && password === "root") {
        return true
    }
    return false
}

export default Login