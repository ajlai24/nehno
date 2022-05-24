import {
  Button, Snackbar
} from '@mui/material';


const PreviewSnackbar = () => (
  <Snackbar
    open
    message="You are in Preview Mode"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    action={
      <Button color="secondary" size="small" href="/api/exit-preview">
        Exit Preview mode
      </Button>
    }
  />
);

export default PreviewSnackbar;