import React, {useContext, useState} from 'react';
import {
  View,
  TextInput,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Button,
} from 'react-native';
import {Card} from 'react-native-paper';
import {windowWidth, windowHeight} from '../../../utils/Dimensions';
import {Context} from '../../../appcontext/context';
import PreviewImageStyles from '../styles/PreviewImageStyles';
import Canvas from 'react-native-canvas';
import loadImage from './Image';

export default function EditImage(props) {
  const [state, dispatch] = useContext(Context);
  const {imageURL, base64Image} = state.editor;
  const [topText, setTopText] = useState();
  const [bottomText, setBottomText] = useState();
  const [canvasDimensions, setCanvasDimensions] = useState({});
  const [canvasG, setCanvasG] = useState(null);
  const [fileType, setFileType] = useState('');

  const {
    width: canvasWidth = 300,
    height: canvasHeight = 300,
  } = canvasDimensions;
  const canvasScale = canvasHeight / canvasWidth;
  const deviceWidth = windowWidth;
  const deviceHeight = windowHeight;
  const windowScale = Math.floor(deviceHeight / deviceWidth);

  let scrollViewWidth, scrollViewHeight;
  if (canvasScale < windowScale) {
    scrollViewWidth = deviceWidth;
    scrollViewHeight = (deviceWidth * canvasHeight) / canvasWidth;
  } else {
    scrollViewHeight = deviceHeight;
    scrollViewWidth = (deviceHeight * canvasWidth) / canvasHeight;
  }

  const handleCanvas = (canvas) => {
    if (canvas) {
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      setCanvasG(canvas);
      const fillText = 'ReactNativeCanvasDemo!';
      const ctx = canvas.getContext('2d');
      loadImage(canvas, imageURL)
        .then(async (image) => {
          ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
          ctx.font = '20px';
          ctx.fillStyle = 'rgba(255, 255, 255, 1)';

          ctx.save();
          const title = 'ReactNativeCanvasDemo';
          ctx.fillText(title, canvasWidth - 120, canvasHeight - 20);
          ctx.restore();

          const calHeight = Math.sqrt(
            Math.pow(canvasWidth, 2) + Math.pow(canvasHeight, 2),
          );
          const measure = await ctx.measureText(fillText);
          let nums = Math.ceil(calHeight / measure.width);
          let content = '';
          while (nums > 0) {
            if (content !== '') {
              content += '  ';
            }
            content += fillText;
            nums--;
          }

          const lines = Math.floor(calHeight / 50);
          for (let i = 0; i < lines; i++) {
            ctx.save();
            ctx.translate(canvasWidth / 2, -canvasHeight / 2);
            ctx.rotate((45 * Math.PI) / 180);
            ctx.fillText(content, 0, 50 + 50 * i);
            ctx.restore();
          }
        })
        .catch(console.error);
    }
  };

  const saveImage = async () => {
    if (canvasG) {
      const dataURL = await canvasG.toDataURL('image/png');
      console.log(dataURL);
    }
  };

  // CanvasRenderingContext2D.drawBreakingText = (str, x, y, w, lh, method) => {
  //   // local variables and defaults
  //   var textSize = parseInt(font.replace(/\D/gi, ''));
  //   var textParts = [];
  //   var textPartsNo = 0;
  //   var words = [];
  //   var currLine = '';
  //   var testLine = '';
  //   str = str || '';
  //   x = x || 0;
  //   y = y || 0;
  //   w = w || canvas.width;
  //   lh = lh || 1;
  //   method = method || 'fill';

  //   // manual linebreaks
  //   textParts = str.split('\n');
  //   textPartsNo = textParts.length;

  //   // split the words of the parts
  //   for (var i = 0; i < textParts.length; i++) {
  //     words[i] = textParts[i].split(' ');
  //   }

  //   // now that we have extracted the words
  //   // we reset the textParts
  //   textParts = [];

  //   // calculate recommended line breaks
  //   // split between the words
  //   for (var i = 0; i < textPartsNo; i++) {
  //     // clear the testline for the next manually broken line
  //     currLine = '';

  //     for (var j = 0; j < words[i].length; j++) {
  //       testLine = currLine + words[i][j] + ' ';

  //       // check if the testLine is of good width
  //       if (measureText(testLine).width > w && j > 0) {
  //         textParts.push(currLine);
  //         currLine = words[i][j] + ' ';
  //       } else {
  //         currLine = testLine;
  //       }
  //     }
  //     // replace is to remove trailing whitespace
  //     textParts.push(currLine);
  //   }

  //   // render the text on the canvas
  //   for (var i = 0; i < textParts.length; i++) {
  //     if (method === 'fill') {
  //       this.fillText(
  //         textParts[i].replace(/((\s*\S+)*)\s*/, '$1'),
  //         x,
  //         y + textSize * lh * i,
  //       );
  //     } else if (method === 'stroke') {
  //       this.strokeText(
  //         textParts[i].replace(/((\s*\S+)*)\s*/, '$1'),
  //         x,
  //         y + textSize * lh * i,
  //       );
  //     } else if (method === 'none') {
  //       return {
  //         textParts: textParts,
  //         textHeight: textSize * lh * textParts.length,
  //       };
  //     } else {
  //       console.warn('drawBreakingText: ' + method + 'Text() does not exist');
  //       return false;
  //     }
  //   }

  //   return {textParts: textParts, textHeight: textSize * lh * textParts.length};
  // };

  // const style = (font, size, align, base) => {
  //   ctx.font = size + 'px ' + font;
  //   ctx.textAlign = align;
  //   ctx.textBaseline = base;
  // };

  // const draw = () => {
  //   // uppercase the text
  //   var top = textTop.toUpperCase();
  //   var bottom = textBottom.toUpperCase();

  //   // set appropriate canvas size
  //   canvas.width = image.width;
  //   canvas.height = image.height;

  //   // draw the image
  //   ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  //   // styles
  //   ctx.fillStyle = '#fff';
  //   ctx.strokeStyle = '#000';
  //   ctx.lineWidth = canvas.width * 0.004;

  //   var _textSizeTop = (textSizeTop / 100) * canvas.width;
  //   var _textSizeBottom = (textSizeBottom / 100) * canvas.width;

  //   // draw top text
  //   style('Impact', _textSizeTop, 'center', 'bottom');
  //   ctx.drawBreakingText(
  //     top,
  //     canvas.width / 2,
  //     _textSizeTop + padding,
  //     null,
  //     1,
  //     'fill',
  //   );
  //   ctx.drawBreakingText(
  //     top,
  //     canvas.width / 2,
  //     _textSizeTop + padding,
  //     null,
  //     1,
  //     'stroke',
  //   );

  //   // draw bottom text
  //   style('Impact', _textSizeBottom, 'center', 'top');
  //   var height = ctx.drawBreakingText(bottom, 0, 0, null, 1, 'none').textHeight;
  //   console.log(ctx.drawBreakingText(bottom, 0, 0, null, 1, 'none'));
  //   ctx.drawBreakingText(
  //     bottom,
  //     canvas.width / 2,
  //     canvas.height - padding - height,
  //     null,
  //     1,
  //     'fill',
  //   );
  //   ctx.drawBreakingText(
  //     bottom,
  //     canvas.width / 2,
  //     canvas.height - padding - height,
  //     null,
  //     1,
  //     'stroke',
  //   );
  // };
  // const printTop = () => {
  //   draw();
  // };
  // const printBottom = () => {
  //   draw();
  // };

  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <View style={styles.body}>
            <View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{height: scrollViewHeight}}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{
                    width: scrollViewWidth,
                    ...styles.canvasWrapper,
                  }}>
                  <Canvas
                    style={{
                      ...styles.canvas,
                    }}
                    ref={handleCanvas}
                  />
                </ScrollView>
              </ScrollView>
            </View>
            <View style={{alignItems: 'center'}}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: windowWidth / 1.5,
                }}
                onChangeText={((text) => setTopText(text), printTop)}
                value={topText}
                placeholder="Top Text"
              />
            </View>
            <View style={{alignItems: 'center'}}>
              <TextInput
                style={{
                  height: 40,
                  borderColor: 'gray',
                  borderWidth: 1,
                  width: windowWidth / 1.5,
                  alignItems: 'center',
                }}
                onChangeText={((text) => setBottomText(text), printBottom)}
                value={bottomText}
                placeholder="Bottom Text"
              />
            </View>
            <Button title="Save" onPress={saveImage} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
    // <ScrollView>
    //   <SafeAreaView>
    //     <View style={{paddingTop: 24, alignItems: 'center'}}>
    //       <View
    //         style={{
    //           width: windowWidth,
    //           resizeMode: 'contain',
    //         }}>
    //         <Canvas
    //           style={{
    //             alignItems: 'center',
    //           }}
    //           ref={handleCanvas}
    //         />
    //       </View>
    //       <View style={{alignItems: 'center'}}>
    //         <View style={{alignItems: 'center'}}>
    //           <TextInput
    //             style={{
    //               height: 40,
    //               borderColor: 'gray',
    //               borderWidth: 1,
    //               width: windowWidth / 1.5,
    //             }}
    //             onChangeText={(text) => setTopText(text)}
    //             value={topText}
    //             placeholder="Top Text"
    //           />
    //         </View>
    //         <View style={{alignItems: 'center'}}>
    //           <TextInput
    //             style={{
    //               height: 40,
    //               borderColor: 'gray',
    //               borderWidth: 1,
    //               width: windowWidth / 1.5,
    //               alignItems: 'center',
    //             }}
    //             onChangeText={(text) => setBottomText(text)}
    //             value={bottomText}
    //             placeholder="Bottom Text"
    //           />
    //         </View>
    //         <View style={{alignItems: 'center'}}>
    //           <FormButton buttonTitle="Download" onPress={() => {}} />
    //         </View>
    //       </View>
    //     </View>
    //   </SafeAreaView>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  body: {},
  defaultImageWrapper: {
    width: 160,
    height: 160,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 4,
  },
  defaultImage: {
    width: 80,
    height: 80,
  },
  canvasWrapper: {
    alignSelf: 'center',
  },
  canvas: {
    alignSelf: 'center',
  },
  sectionTitle: {
    paddingTop: 24,
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
  },
});
