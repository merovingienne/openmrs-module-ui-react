import React, { Component } from 'react';
import { AppBar, IconButton } from 'material-ui';
import FontIcon from 'material-ui/FontIcon';


class NavBar extends Component {
    render(){
        return(
            <div>
                <AppBar
                    title="OpenMRS"
                    iconElementRight={<IconButton>
                        <FontIcon className="material-icons"
                                  style={{color:'white'}}>perm_identity
                        </FontIcon>
                    </IconButton>}
                    showMenuIconButton={this.props.hasMenuIcon}
                    onRightIconButtonTouchTap={this.props.onRightIconClick}
                />
            </div>);
    }
}


export default NavBar;
