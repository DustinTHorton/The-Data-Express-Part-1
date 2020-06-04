window.onload = function (){
  var eyesSlider = this.document.getElementByID('eyes_slider');
  var noseSlider = this.document.getElementByID('nose_slider');
  var mouthSlider = this.docment.getElementByID('mouth_slider');
  var image = this.document.getElementById('image');
  var hexValue = this.document.getElementById('hex_value')


  eyesSlider.oninput = function(){
    eyes = avatarUrl.split('/')[3]
    nose = avatarUrl.split('/')[4]
    mouth = avatarUrl.split('/')[5]
    color = avatarUrl.split('/')[6]
    if(eyesSlider.value == 1){
      image.src = `/myAvatars/face/eyes1/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 2){
      image.src = `/myAvatars/face/eyes2/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 3){
      image.src = `/myAvatars/face/eyes3/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 4){
      image.src = `/myAvatars/face/eyes4/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 5){
      image.src = `/myAvatars/face/eyes5/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 6){
      image.src = `/myAvatars/face/eyes6/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 7){
      image.src = `/myAvatars/face/eyes7/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 8){
      image.src = `/myAvatars/face/eyes8/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 9){
      image.src = `/myAvatars/face/eyes9/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }else if(eyesSlider == 10){
      image.src = `/myAvatars/face/eyes10/${nose}/${mouth}/${color}/150`
      window.location.reload();
    }
    console.log(image.src);
    //window.location.reload();
  });

  noseSlider.addEventListener('input', function(){
    eyes = avatarUrl.split('/')[3]
    mouth = avatarUrl.split('/')[5]
    color = avatarUrl.split('/')[6]
    if(eyesSlider.value == 1){
      image.src = `/myAvatars/face/${eyes}/nose2/${mouth}/${color}/150`
    }else if(noseSlider == 2){
      image.src = `/myAvatars/face/${eyes}/nose3/${mouth}/${color}/150`
    }else if(noseSlider == 3){
      image.src = `/myAvatars/face/${eyes}/nose4/${mouth}/${color}/150`
    }else if(noseSlider == 4){
      image.src = `/myAvatars/face/${eyes}/nose5/${mouth}/${color}/150`
    }else if(noseSlider == 5){
      image.src = `/myAvatars/face/${eyes}/nose6/${mouth}/${color}/150`
    }else if(noseSlider == 6){
      image.src = `/myAvatars/face/${eyes}/nose7/${mouth}/${color}/150`
    }else if(noseSlider == 7){
      image.src = `/myAvatars/face/${eyes}/nose8/${mouth}/${color}/150`
    }else if(noseSlider == 8){
      image.src = `/myAvatars/face/${eyes}/nose9/${mouth}/${color}/150`
    }
    window.location.reload();
  });

  mouthSlider.addEventListener('input', function(){
    eyes = avatarUrl.split('/')[3]
    nose = avatarUrl.split('/')[4]
    color = avatarUrl.split('/')[6]
    if(mouthSlider.value == 1){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth1/${color}/150`
    }else if(mouthSlider == 2){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth3/${color}/150`
    }else if(mouthSlider == 3){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth5/${color}/150`
    }else if(mouthSlider == 4){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth6/${color}/150`
    }else if(mouthSlider == 5){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth7/${color}/150`
    }else if(mouthSlider == 6){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth9/${color}/150`
    }else if(mouthSlider == 7){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth10/${color}/150`
    }else if(mouthSlider == 8){
      image.src = `/myAvatars/face/${eyes}/${nose}/mouth11/${color}/150`
    }
    window.location.reload()
  });

  hexValue.addEventListener('input', function(){
    eyes = avatarUrl.split('/')[3]
    nose = avatarUrl.split('/')[4]
    mouth = avatarUrl.split('/')[5]
    image.src = `/myAvatars/face/${eyes}/${nose}/${mouth}/` + hexValue + `/150`
    window.location.reload();
  });
};


