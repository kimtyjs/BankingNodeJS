import React from "react";
import { MenuLinks } from "./index"

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
        this._menuToggle = this._menuToggle.bind(this);
        this._handleDocumentClick = this._handleDocumentClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this._handleDocumentClick, false);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this._handleDocumentClick, false);
    }
    _handleDocumentClick(e) {
        if (!this.refs.root.contains(e.target) && this.state.isOpen === true) {
            this.setState({
                isOpen: false
            });
        }
    }
    _menuToggle(e) {
        e.stopPropagation();
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        let menuStatus = this.state.isOpen ? 'isopen' : '';

        return (
            <div ref="root">
                <div className="menubar">
                    <div className="hambclicker" onClick={ this._menuToggle }/>
                    <div id="hambmenu" className={ menuStatus }>
                        <i className="fa fa-bars" aria-hidden="true"/>
                    </div>
                </div>
                <MenuLinks menuStatus={ menuStatus }/>
            </div>
        )
    }
}

export default Menu;
