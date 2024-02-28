import React, {forwardRef, useImperativeHandle } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';


const useStyles = makeStyles(top => ({
  root: {
    width: 350,
    position: 'absolute',
    right: 60,
    top: top
  },
  input: {
    width: 54,
    position: 'absolute',
    right: 0
  },
  slider: {
    width: 160,
    position: 'absolute',
    right: 80
  },
  label: {
    position: 'absolute',
    right: 260
  },
}));

const InputSlider = forwardRef((props, ref) => {
  // {ref, top, label, updateValue})
  const [value, setValue] = React.useState(0);
  useImperativeHandle(ref, () => ({

    setValueP(_value) {
      setValue(_value * 100);
    }

  }));
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.updateValue(newValue);

  };

  const handleInputChange = (event) => {
    const _value = event.target.value === '' ? '' : Number(event.target.value)
    setValue(_value);
    props.updateValue(_value);
  };

  const handleBlur = () => {
    const maxValue = getMaxValue()
    if (value < 0) {
      setValue(0);
      props.updateValue(0);
    } else if (value > maxValue) {
      setValue(maxValue);
      props.updateValue(maxValue);
    }
  };

  const getMaxValue = () => {
    return props.maxValue ? props.maxValue : 100;
  }
  const classes = useStyles({top: props.top});
  return (
    <div className={classes.root} style={{top: props.top + "px"}}>
      
      <Grid container spacing={2} alignItems="center">
        <Grid item>
        <Typography 
          id="input-slider"
          className={classes.label}
          gutterBottom>
          {props.label}
        </Typography>
        </Grid>
        <Grid item>
        </Grid>
        <Grid item xs>
          <Slider
            className={classes.slider}
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={0}
            max={getMaxValue()}
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: getMaxValue(),
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
});
export default InputSlider;