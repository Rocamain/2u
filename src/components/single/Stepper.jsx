import { MobileStepper } from '@mui/material';

export default function DotsMobileStepper({ steps, activeStep }) {
  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      activeStep={activeStep}
      position="bottom"
      sx={{
        p: '0',
        width: { xs: '100%', md: '76%' },
        mt: '3.5em',
        ml: 'auto',
        zIndex: 100,
        position: 'relative',
        justifyContent: 'center',
        '& MuiMobileStepper-dotActive': { color: 'red' },
      }}
    />
  );
}
