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
		//labelContainer.innerHTML = "���� " + hands.length + " ���";
		if(hands.length == 0)
			labelContainer.innerHTML = "";


			//const one = Math.acos(((hands[4].keypoints[k].x-hands[2].keypoints[k].x)*(hands[8].keypoints[k].x-hands[5].keypoints[k].x)+(hands[4].keypoints[k].y-hands[2].keypoints[k].y)*(hands[8].keypoints[k].y-hands[5].keypoints[k].y))/(Math.sqrt(((hands[4].keypoints[k].x-hands[2].keypoints[k].x)^2)+(hands[4].keypoints[k].y-hands[2].keypoints[k].y)^2)*Math.sqrt(((hands[8].keypoints[k].x-hands[5].keypoints[k].x)^2)+(hands[8].keypoints[k].y-hands[5].keypoints[k].y)^2)));
				//labelContainer.innerHTML = one;
		

		if(hands.length == 1)
		{


			//const one = Math.acos(((hands[0].keypoints[4].x-hands[0].keypoints[2].x)*(hands[0].keypoints[8].x-hands[0].keypoints[5].x)+(hands[0].keypoints[4].y-hands[0].keypoints[2].y)*(hands[0].keypoints[8].y-hands[0].keypoints[5].y))/(Math.sqrt(((hands[0].keypoints[4].x-hands[0].keypoints[2].x)^2)+(hands[0].keypoints[4].y-hands[0].keypoints[2].y)^2)*Math.sqrt(((hands[0].keypoints[8].x-hands[0].keypoints[5].x)^2)+(hands[0].keypoints[8].y-hands[0].keypoints[5].y)^2)));
			//labelContainer.innerHTML = one;
			
			if(hands[0].handedness == "Right")
				labelContainer.innerHTML = "Права рука<br>";
			else
				labelContainer.innerHTML = "Ліва рука<br>";
			let thumb = [hands[0].keypoints[1], hands[0].keypoints[4]],
				index = [hands[0].keypoints[5], hands[0].keypoints[8]],
				middle = [hands[0].keypoints[9], hands[0].keypoints[12]],
				ring = [hands[0].keypoints[13], hands[0].keypoints[16]],
				pinky = [hands[0].keypoints[17], hands[0].keypoints[20]];
			let ati = getangle(thumb, index);
			let aim = getangle(index, middle);
			let amr = getangle(middle, ring);
			let arp = getangle(ring, pinky);
			labelContainer.innerHTML += "thumb^index = " + ati + "<br>";
			labelContainer.innerHTML += "index^middle = " + aim + "<br>";
			labelContainer.innerHTML += "middle^ring = " + amr + "<br>";
			labelContainer.innerHTML += "ring^pinky = " + arp + "<br>";

			for(let k=0;k<hands[0].keypoints.length;k++)
				labelContainer.innerHTML += hands[0].keypoints[k].name + " (" + hands[0].keypoints[k].x + ", " + hands[0].keypoints[k].y + ")<br>";
				
			
			//labelContainer.innerHTML = Math.acos(((hands[4].x-hands[2].x)*(hands[8].x-hands[5].x)+(hands[4].y-hands[2].y)*(hands[8].y-hands[5].y))/(Math.sqrt(((hands[4].x-hands[2].x)^2)+(hands[4].y-hands[2].y)^2)*Math.sqrt(((hands[8].x-hands[5].x)^2)+(hands[8].y-hands[5].y)^2)));
				
		
		}


	}
        window.requestAnimationFrame(loop);
	frameCount++;
				
    }


function modul(vec)
{
	return Math.sqrt(vec[0]*vec[0] + vec[1]*vec[1]);
}


function getangle(finger1, finger2)
{
	let vec1 = [finger1[1].x - finger1[0].x, finger1[1].y - finger1[0].y], 
		vec2 = [finger2[1].x - finger2[0].x, finger2[1].y - finger2[0].y];
	let l1 = modul(vec1), l2 = modul(vec2);
	let sp = vec1[0]*vec2[0] + vec1[1]*vec2[1];

	return Math.trunc(Math.acos(sp/(l1*l2))*180/Math.PI);
}
