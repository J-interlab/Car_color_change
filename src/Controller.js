import React, { useEffect, useState, useRef } from "react"
import ColorPicker from "./ColorPicker";
import InputSlider from "./InputSlider";
import InitialColors from "./InitialColors";
import Button from "@material-ui/core/Button"

import {COLOR_COUNTS, COLOR_CODES} from "./Constants";
import _ from 'lodash';

var counter = 0;

const Controller = function({container, carIndex: _carIndex}){
  const [carIndex, setCarIndex] = useState(_carIndex);
  const [colorIndex, setColorIndex] = useState(0);
  const [colors, setColors] = useState(InitialColors);
  const [exterior, setExterior] = useState(true);
  const [isSceneLoading, setIsSceneLoading] = useState(false);
  
  const colorRef = useRef();
  const metalicRef = useRef();
  const smoothnessRef = useRef();
  const reflectivityRef = useRef();
  const emissionColorRef = useRef();
  const clearCoatRef = useRef();

  const handleLoad = (event) => {
    const data = event.data;
    if(typeof data === 'object') return;
    const obj = JSON.parse(data);
    switch(obj.message)
    {
      case "spot":
        const postData = {
          key: 'key',
          value: `showonlyspot ${obj.value}`
        };
        container.current.contentWindow.postMessage(JSON.stringify(postData), '*');
        break;

      case "scriptLoaded":
        /* script is loaded. now we can load engine */
        const data = {
          message: 'loadEngine'
        };
        container.current.contentWindow.postMessage(JSON.stringify(data), '*'); 
        break;

      case "engineLoaded":
        /* engine is loaded. now we can load a scene(exterior / interior) */

        /* load exterior / interior */
        setTimeout(() => {
          //showInterior();
          showExterior();
        }, 200);
        break;
        
      case "sceneLoaded":
        /* scene is loaded. now we can control everything */
        container.current.contentWindow.postMessage(JSON.stringify({message: 'color', payload: 0}), '*');
        changeColor(0);
        setTimeout(() => {
          setTimeout(() => {
            setIsSceneLoading(false);
          }, 500);
        }, 200);
        break;
      case "goInteriorClicked":
        break;

        case "screenshotTaken":
            // alert('screenshot taken')

            var download = document.createElement('a');
            download.href = obj.payload;
            download.download = `sportage${counter}.png`;
            download.click();

            break;
      default:
        
    }
  }
  useEffect(() => {
    window.addEventListener('message', handleLoad);
  }, [])

  const changeColor = (index) => {
      setColorIndex(index);
      let colorCode = COLOR_CODES[carIndex][index];
      console.log(colorCode, carIndex, index)
      if(colorCode.indexOf('+') >= 0) {
          colorCode = colorCode.split('+')[0];
      }
      let found = colors[colorCode];
      console.log(colors, found);
      colorRef.current.setValueP(found.diffuse);
      metalicRef.current.setValueP(found.metalness || 0.978);
      smoothnessRef.current.setValueP(found.glossiness || 0.35);
      reflectivityRef.current.setValueP(found.reflectivity || 0.5);
      emissionColorRef.current.setValueP(found.emissive);
      clearCoatRef.current.setValueP(found.clearcoat || 0.15);
      console.log(carIndex, index);

      container.current.contentWindow.postMessage(JSON.stringify({message: 'colorByValue', payload: found}), '*');
  }

  const takeScreenshot = () => {
    container.current.contentWindow.postMessage(JSON.stringify({message: 'hideAllSpots'}), '*');
    
    if(counter < 36) {
        var deg = -60 + counter * 10;
        container.current.contentWindow.postMessage(JSON.stringify({message: 'cameraResetScreenshot', payload: deg}), '*');
        container.current.contentWindow.postMessage(JSON.stringify({message: 'takeScreenshot'}), '*');
        counter = counter + 1;
    }
        
  }

  const changeCarIndex = (index) => {
    setCarIndex(index);
    const data = {
      message: 'exterior' + index
    };
    container.current.contentWindow.postMessage(JSON.stringify(data), '*');
  }

  const colorCount = parseInt(COLOR_COUNTS[carIndex]);

  const showExterior = () => {
    if(isSceneLoading)
      return;
    setExterior(true);
    setIsSceneLoading(true);
    const data = {
      message: 'exterior' + carIndex
    };
    container.current.contentWindow.postMessage(JSON.stringify(data), '*');
  }

  
  var image_names = [];
  for(var i = 1; i <= colorCount; i++) {
    image_names.push(carIndex + "/btn_color_" + (i < 10 ? '0' + i : i));
  }

  const style = {
    backgroundColor: "#fffd",
    width: 500,
    height: 400,
    position: "absolute",
    right: 10,
    top: 10,
    borderRadius: 10
  }

  const updateColor = (key, color) => {
    let colorCode = COLOR_CODES[carIndex][colorIndex];
    if(colorCode.indexOf('+') >= 0) {
        colorCode = colorCode.split('+')[0];
    }
    
    let newColor = {
      r: color.r / 255,
      g: color.g / 255,
      b: color.b / 255,
      a: color.a,
    }
    const tmpColors = {...colors};
    tmpColors[colorCode][key] = newColor;
    
    setColors(tmpColors);
    container.current.contentWindow.postMessage(JSON.stringify({message: 'colorByValue', payload: tmpColors[colorCode]}), '*');
  } 

  const updateValue = (key, value) => {
    const maxValue = key == 'reflectivity' ? 200 : 100;

    if(value < 0)
      value = 0;
    if(value > maxValue)
      value = maxValue
    value /= 100;

    let colorCode = COLOR_CODES[carIndex][colorIndex];
    if(colorCode.indexOf('+') >= 0) {
        colorCode = colorCode.split('+')[0];
    }
    const tmpColors = {...colors}
    tmpColors[colorCode][key] = value;
    
    setColors(tmpColors);
    
    container.current.contentWindow.postMessage(JSON.stringify({message: 'colorByValue', payload: tmpColors[colorCode]}), '*');
  }
  const downloadFile = async () => {
    const fileName = "colorsettings";
    const json = JSON.stringify(colors);
    const blob = new Blob([json],{type:'application/json'});
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const Download = () => {
    downloadFile();
  }

  const handleUpload = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      let isOK = (() => {
        try{
          let obj = JSON.parse(e.target.result);
          if(obj.SWP != null){
              setColors(obj); 
              return true;
          }
          return false;
        }catch(e){
          return false;
        }
      })();

      if(!isOK){
        alert('invalid json file');
      }
      // setFiles(e.target.result);
    };
  }
  const setWheel = (index) => {
    container.current.contentWindow.postMessage(JSON.stringify({message: 'setWheel', payload: index}), '*');
  }

    return (
        <>
        <div style={{width: 1000, height: 80}}>
       {
          _.times(4, index => <img src={`./images/car${index}.png`} alt={"car" + index} key = {index} className="imageButton" onClick={() => changeCarIndex(index)}/>)
        }
        {
            _.times(4, index => <button onClick={() => setWheel(index)}>wheel{index + 1}</button>)
        }
        </div>
        {exterior &&
        <>
        {
          _.times(colorCount, index => <img src={`./images/${image_names[index % image_names.length]}.png`} alt={"button" + index} key = {index} className="imageButton" onClick={() => changeColor(index)}/>)
        }
        <img src={`./images/btn-share.png`} alt={"share button"} className="imageButton" onClick={() => takeScreenshot()}/>
        
        </>
      }
      <div style={style}>
      <ColorPicker ref={colorRef}         top={50}  label="Color"         updateColor={(color) => updateColor('diffuse', color)}/>
      <InputSlider ref={metalicRef}       top={100} label="Metalic"       updateValue={(value) => updateValue('metalness', value)}/>
      <InputSlider ref={smoothnessRef}    top={150} label="Smoothness"    updateValue={(value) => updateValue('glossiness', value)}/>
      <InputSlider ref={reflectivityRef}  top={200} label="Reflectivity"  maxValue={200} updateValue={(value) => updateValue('reflectivity', value)}/>
      <ColorPicker ref={emissionColorRef} top={250} label="Emissive"      updateColor={(color) => updateColor('emissive', color)}/>
      <InputSlider ref={clearCoatRef}     top={300} label="ClearCoat"     updateValue={(value) => updateValue('clearcoat', value)}/>
      <Button variant="contained" color="primary" style={{top: 350}} onClick={Download}>save</Button> 
      <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>

      <input
        accept=".json"
        style={{ display: "none" }}
        id="contained-button-file"
        type="file"
        onChange={handleUpload}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span" style={{top: 350}} onClick={() => {document.getElementById("contained-button-file").value=""}}>
          load
        </Button>
      </label>

      {/* <Button variant="contained" color="primary"  onClick={Upload}>load</Button> */}
      </div>
      </>
    );
};

export default Controller;


