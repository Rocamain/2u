import { MobileStepper } from '@mui/material';

export default function DotsMobileStepper({ steps, activeStep }) {
  return (
    <MobileStepper
      variant="dots"
      steps={steps}
      activeStep={activeStep}
      sx={{
        p: '0',
        width: '100%',
        marginTop: '10px',
        mx: 'auto',
        top: 0,
        position: 'relative',
        justifyContent: 'center',
      }}
    />
  );
}
