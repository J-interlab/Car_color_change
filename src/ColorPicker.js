

import React, {useState, forwardRef, useImperativeHandle} from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import Typography from '@material-ui/core/Typography';

const ColorPicker = forwardRef((props, ref) => {
    const [display, setDisplay] = useState(false);
    const [color, setColor] = useState({
        r: '0',
        g: '0',
        b: '0',
        a: '1',
      });

    useImperativeHandle(ref, () => ({
        setValueP(_color) {
            setColor({
                r: _color.r * 255,
                g: _color.g * 255,
                b: _color.b * 255,
                a: 1,
            });
        }
    }));

  const handleClick = () => {
    setDisplay(!display);
  };

  const handleClose = () => {
    setDisplay(false);
  };

  const handleChange = (_color) => {
      setColor(_color.rgb);
      props.updateColor(_color.rgb);
  };

  const styles = reactCSS({
    'default': {
      color: {
        width: '36px',
        height: '24px',
        borderRadius: '1px',
        background: `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`,
      },
      swatch: {
          position: 'absolute',
        padding: '2px',
        background: '#fff',
        borderRadius: '0px',
        boxShadow: '0 0 0 0px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer',
        right: "260px"
      },
      popover: {
        position: 'absolute',
        right: "20px",
        zIndex: '2',
      },
      cover: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      label: {
          position: 'absolute',
          right: "320px"
      },
      body: {
          position: 'absolute',
          top: props.top + "px",
          right: "0px",
      }
    },
  });

  return (
      <div style={styles.body}>
          <Typography style={styles.label}>{props.label}</Typography>
        <div style={ styles.swatch } onClick={ handleClick }>
          <div style={ styles.color } />
        </div>
        { display ? <div style={ styles.popover }>
          <div style={ styles.cover } onClick={ handleClose }/>
          <SketchPicker color={ color } onChange={ handleChange } />
        </div> : null }

      </div>
    );
  
});

export default ColorPicker;