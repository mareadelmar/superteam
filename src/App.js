import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PageHome from "./containers/PageHome";
import PageSearch from "./containers/PageSearchResults";
import PageDetails from "./containers/PageDetails";
import Layout from "./components/Layout";
import Login from "./components/Login";

import { SearchResultContext } from "./context/SearchResultContext";

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <SearchResultContext>
                    <Switch>
                        <Route exact path="/">
                            <PageHome />
                        </Route>
                        <Route path="/search/:keyword">
                            <PageSearch />
                        </Route>
                        <Route path="/character/:id">
                            <PageDetails />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </SearchResultContext>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
