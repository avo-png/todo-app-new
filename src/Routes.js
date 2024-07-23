import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TodayPage } from "./Pages/TodayPage";

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <TodayPage />
                </Route>
            </Switch>
        </Router>
    )
}