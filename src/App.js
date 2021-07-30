import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHome from "./containers/PageHome";
import PageSearchResults from "./containers/PageSearchResults";
import Login from "./components/Login";
import Header from "./components/Header";
import { SearchResultContext } from "./context/SearchResultContext";
import { UserDataContext } from "./context/UserDataContext";

function App() {
    return (
        <BrowserRouter>
            <UserDataContext>
                <Header />
                <Switch>
                    <SearchResultContext>
                        <Route exact path="/" component={PageHome} />
                        <Route
                            exact
                            path="/search/:keyword"
                            component={PageSearchResults}
                        />
                        <Route exact path="/login" component={Login} />
                        {/* <Route
                                render={() => <h1>404: page not found</h1>}
                            /> */}
                    </SearchResultContext>
                </Switch>
            </UserDataContext>
        </BrowserRouter>
    );
}

export default App;
