const styles = theme => ({
  taskBoard: {
    display: 'flex',
    alignItems: 'center',
  },
  shape: {
    backgroundColor: theme.shape.backgroundColor,
    color: theme.shape.textColor,
    borderRadius: theme.shape.borderRadius,
    borderColor: theme.shape.borderColor,
    padding: 20,
    margin: 10,
  }
})
export default styles;