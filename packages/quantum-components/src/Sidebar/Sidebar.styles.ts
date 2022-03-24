import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/system';

export default makeStyles((theme: Theme) => ({
  drawer: {
    width: 80,
    height: '100vh',
    maxHeight: '100vh',
    overflowY: 'auto',
    display: 'flex',
    position: 'fixed',
    paddingBottom: 20,
    boxSizing: 'border-box',
    flexDirection: 'column',
    zIndex: theme.zIndex.drawer,
    transition: theme.transitions.create(['width'], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    '& .MuiList-root': { flexGrow: 1 },
    '& .MuiListItem-root': {
      display: 'flex',
      '&.active,& ~ .active': {
        color: theme.palette.primary.main,
        '& .MuiSvgIcon-root': { color: theme.palette.primary.main },
      },
      '& .MuiListItemIcon-root': {
        minWidth: 48,
        margin: theme.spacing(0.5, 0),
        '& img': { width: 48, margin: theme.spacing(1, 0) },
        '& .MuiSvgIcon-root': { margin: theme.spacing(0, 'auto') },
      },
    },
    '& .MuiListItemText-root': { display: 'none', marginLeft: '20px' },
    '&:hover': {
      width: 260,
      '& .MuiListItemText-root': { display: 'block' },
      '& $nested ': { maxHeight: 250, '& .MuiSvgIcon-root': { width: 'auto' } },
    },
  },
  nested: {
    maxHeight: 0,
    padding: 0,
    marginLeft: theme.spacing(6),
    transition: theme.transitions.create('max-height', {
      duration: theme.transitions.duration.enteringScreen,
      easing: 'cubic-bezier(0, 1, 0, 1)',
    }),
    '& .MuiListItem-root': { padding: theme.spacing(0.5, 2) },
    '& .MuiSvgIcon-root': { width: 0, fontSize: 20 },
  },
  disabledLink: { pointerEvents: 'none' },
}));
