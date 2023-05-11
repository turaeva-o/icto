let model, webcam, labelContainer, detector;

    init();
    async function init() {

    
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(640, 480, flip); // width, height, flip
        await webcam.setup(); // request access to the webcam
        await webcam.play();

	const model = handPoseDetection.SupportedModels.MediaPipeHands;
	const detectorConfig = {
	  runtime: 'mediapipe', // or 'tfjs',
	  solutionPath: 'https://cdn.jsdelivr.net/npm/@mediapipe/hands',
	  modelType: 'lite'//'full'
	}
	detector = await handPoseDetection.createDetector(model, detectorConfig);

        window.requestAnimationFrame(loop);

        document.getElementById("webcam-container").appendChild(webcam.canvas);
        labelContainer = document.getElementById("label-container");
    }

    let frameCount = 0;
    const skipCount = 5;

    async function loop() {
        webcam.update(); // update the webcam frame
	if(frameCount % skipCount == 0)
	{
		const hands = await detector.estimateHands(webcam.canvas);
		//console.log(hands);
		//labelContainer.innerHTML = "Бачу " + hands.length + " рук";
		if(hands.length == 0)
			labelContainer.innerHTML = "";


			//const one = Math.acos(((hands[4].keypoints[k].x-hands[2].keypoints[k].x)*(hands[8].keypoints[k].x-hands[5].keypoints[k].x)+(hands[4].keypoints[k].y-hands[2].keypoints[k].y)*(hands[8].keypoints[k].y-hands[5].keypoints[k].y))/(Math.sqrt(((hands[4].keypoints[k].x-hands[2].keypoints[k].x)^2)+(hands[4].keypoints[k].y-hands[2].keypoints[k].y)^2)*Math.sqrt(((hands[8].keypoints[k].x-hands[5].keypoints[k].x)^2)+(hands[8].keypoints[k].y-hands[5].keypoints[k].y)^2)));
				//labelContainer.innerHTML = one;
		

		if(hands.length == 1)
		{


			//const one = Math.acos(((hands[0].keypoints[4].x-hands[0].keypoints[2].x)*(hands[0].keypoints[8].x-hands[0].keypoints[5].x)+(hands[0].keypoints[4].y-hands[0].keypoints[2].y)*(hands[0].keypoints[8].y-hands[0].keypoints[5].y))/(Math.sqrt(((hands[0].keypoints[4].x-hands[0].keypoints[2].x)^2)+(hands[0].keypoints[4].y-hands[0].keypoints[2].y)^2)*Math.sqrt(((hands[0].keypoints[8].x-hands[0].keypoints[5].x)^2)+(hands[0].keypoints[8].y-hands[0].keypoints[5].y)^2)));
			//labelContainer.innerHTML = one;
			
			if(hands[0].handedness == "Right")
				labelContainer.innerHTML = "Піднято праву руку<br>";
			else
				labelContainer.innerHTML = "Піднято ліву руку<br>";
			for(let k=0;k<hands[0].keypoints.length;k++)
				labelContainer.innerHTML += hands[0].keypoints[k].name + " (" + hands[0].keypoints[k].x + ", " + hands[0].keypoints[k].y + ")<br>";
			
				
			
			//labelContainer.innerHTML = Math.acos(((hands[4].x-hands[2].x)*(hands[8].x-hands[5].x)+(hands[4].y-hands[2].y)*(hands[8].y-hands[5].y))/(Math.sqrt(((hands[4].x-hands[2].x)^2)+(hands[4].y-hands[2].y)^2)*Math.sqrt(((hands[8].x-hands[5].x)^2)+(hands[8].y-hands[5].y)^2)));
				
		
		}


	}
        window.requestAnimationFrame(loop);
	frameCount++;
				
    }


//Math.acos(((hands[4].keypoints[k].x-hands[2].keypoints[k].x)*(hands[8].keypoints[k].x-hands[5].keypoints[k].x)+(hands[4].keypoints[k].y-hands[2].keypoints[k].y)*(hands[8].keypoints[k].y-hands[5].keypoints[k].y))/(Math.sqrt(((hands[4].keypoints[k].x-hands[2].keypoints[k].x)^2)+(hands[4].keypoints[k].y-hands[2].keypoints[k].y)^2)*Math.sqrt(((hands[8].keypoints[k].x-hands[5].keypoints[k].x)^2)+(hands[8].keypoints[k].y-hands[5].keypoints[k].y)^2)))
