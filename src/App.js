import React, {useEffect} from "react";
import {Navbar} from "./components";
import {Register, Login} from "./pages";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SET_USER_AC} from "./reducers/user";
import {useHistory} from "react-router-dom";

function App() {
    const isAuth = useSelector((state) => state.user.isAuth);
    const history = useHistory();
    const dispatch = useDispatch();
    console.log(history)

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(SET_USER_AC(token));
        } else {
            location.pathname = '/login'
        }
    }, []);

    return (
        <div className="App">
            <Router>
                <Navbar/>
                {!isAuth && (
                    <Switch>
                        <Route path="/register" component={Register}/>
                        <Route path="/login" component={Login}/>
                    </Switch>
                )}
            </Router>
        </div>
    );
}

export default App;
