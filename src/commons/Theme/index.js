import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#004d40',
    secondary: '#009688',
    error: '#f44336'
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#e91e63',
    textColor: '#ffffff',
    borderColor: '#cccccc'
  }

});
export default theme;