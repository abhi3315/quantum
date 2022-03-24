import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Card, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/ExitToApp';
import sidebarConfig from './Sidebar.config';
import useStyles from './Sidebar.styles';

const ListItemAnchor = (props) => <ListItem button component={NavLink} {...props} />;

const Sidebar = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.drawer}>
      <ListItem component={Link} to="/">
        <ListItemIcon>
          <img alt="RoaDo Logo" className={classes.logo} src={Logo} />
        </ListItemIcon>
        <ListItemText primary="Roado" primaryTypographyProps={{ variant: 'h5', noWrap: true }} />
      </ListItem>
      <List>
        {sidebarConfig.items
          .filter(
            (item) =>
              !user.features ||
              (user.features &&
                ((Object.keys(user.features).includes(item.key) && user.features[item.key]) ||
                  !Object.keys(user.features).includes(item.key))),
          )
          .map((eachItem) => {
            const Icon = eachItem.icon;
            return (
              <React.Fragment key={eachItem.name}>
                <ListItemAnchor
                  to={eachItem.path}
                  className={cx({ [classes.disabledLink]: !!eachItem.subMenu })}
                >
                  <ListItemIcon>
                    <Icon color="inherit" />
                  </ListItemIcon>
                  <ListItemText primary={eachItem.name} primaryTypographyProps={{ noWrap: true }} />
                </ListItemAnchor>
                {eachItem.subMenu && checkPermission(eachItem.permission) && (
                  <List className={classes.nested}>
                    {eachItem.subMenu.map((subItem) => (
                      <ListItemAnchor to={subItem.path} key={subItem.key}>
                        <ListItemText
                          primary={subItem.name}
                          primaryTypographyProps={{ noWrap: true, variant: 'body2' }}
                        />
                      </ListItemAnchor>
                    ))}
                  </List>
                )}
              </React.Fragment>
            );
          })}
      </List>
      <ListItem button onClick={onLogout}>
        <ListItemIcon>
          <LogoutIcon color="inherit" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </Card>
  );
};

Sidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.shape({
    features: PropTypes.shape({}),
    permissions: PropTypes.shape({}),
  }),
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default withRouter(connect(mapStateToProps)(Sidebar));
