import React from "react";

class MenuLinks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            links: [
                {
                    text: 'Home',
                    link: '#',
                    icon: 'fa-home'
                },

                {
                text: 'Banking List',
                link: '#',
                icon: 'fa-university'
                },
                {
                    text: 'Account',
                    link: '#',
                    icon: 'fa-user-circle'
                },

            ]
        }
    }
    render() {
        let links = this.state.links.map((link, i) => <li ref={i + 1}><i aria-hidden="true" className={`fa ${ link.icon }`}/><a href={link.link} >{link.text}</a></li>);

        return (
            <div className={this.props.menuStatus} id='menu'>
                <div className="menu-header">

                </div>
                <ul>
                    { links }
                </ul>
            </div>
        )
    }
}

export default MenuLinks;
