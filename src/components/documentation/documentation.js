import "./documentation.css";
import { Switch, Route, Link } from "react-router-dom";
import GettingStarted from "./components/getting-started.js/getting-started";
import Avatar from "./components/avatar/avatar";
import Navbar from "./components/navbar/navbar";
import Button from "./components/button/button";
import Badge from "./components/badge/badge";
import Card from "./components/card/card";
import List from "./components/list/list";
import Input from "./components/input/input";
import Modal from "./components/modal/modal";
import Image from "./components/image/image";
import Toast from "./components/toast/toast";
import Typography from "./components/typography/typography";
import Spinner from "./components/spinner/spinner";

const linkStyle = {
    textDecoration: "none",
    color: "inherit",
    backgroundColor: "inherit",
};

function Documentation() {
    return (
        <div className="grid" id="docsDiv">
            <div id="docsNavSection">
                <ul class="list-group text-size-1 text-heading-medium">
                    <Link to="/docs/getting-started" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Getting Started</li>
                    </Link>
                    <Link to="/docs/navbar" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Navbar</li>
                    </Link>
                    <Link to="/docs/button" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Button</li>
                    </Link>
                    <Link to="/docs/avatar" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Avatar</li>
                    </Link>
                    <Link to="/docs/badge" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Badges</li>
                    </Link>
                    <Link to="/docs/card" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Card</li>
                    </Link>
                    <Link to="/docs/list" style={linkStyle}>
                        <li class="list-item list-item-action p-1">List</li>
                    </Link>
                    <Link to="/docs/input" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Input</li>
                    </Link>
                    <Link to="/docs/modal" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Modal</li>
                    </Link>
                    <Link to="/docs/image" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Image</li>
                    </Link>
                    <Link to="/docs/toast" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Toast</li>
                    </Link>
                    <Link to="/docs/typography" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Typography</li>
                    </Link>
                    <Link to="/docs/spinner" style={linkStyle}>
                        <li class="list-item list-item-action p-1">Spinner</li>
                    </Link>
                </ul>
            </div>
            <div id="docsContentSection">
                <Switch>
                    <div>
                        <Route path="/docs/getting-started" component={GettingStarted} />
                        <Route path="/docs/navbar" component={Navbar} />
                        <Route path="/docs/button" component={Button} />
                        <Route path="/docs/avatar" component={Avatar} />
                        <Route path="/docs/badge" component={Badge} />
                        <Route path="/docs/card" component={Card} />
                        <Route path="/docs/list" component={List} />
                        <Route path="/docs/input" component={Input} />
                        <Route path="/docs/modal" component={Modal} />
                        <Route path="/docs/image" component={Image} />
                        <Route path="/docs/toast" component={Toast} />
                        <Route path="/docs/typography" component={Typography} />
                        <Route path="/docs/spinner" component={Spinner} />
                    </div>
                </Switch>
            </div>
        </div>
    );
}

export default Documentation;
