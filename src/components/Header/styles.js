import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    heading: {
      fontSize: '1.6rem',
      fontFamily: 'Gotham Book',
      letterSpacing: '1px',
      textAlign: 'center',
      margin: '0 0 20px 0',
      padding: '10px 20px',
      color: '#2d2e2f',
      boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.6)',
      position: 'sticky',
      top: 0,
      background: '#f2f2f2',
      zIndex: 10,
      borderRadius: '10px',
    },
  }))