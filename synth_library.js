var audioCtx = new (window.AudioContext || window.webkitAudioContext)();


function dropSound(freq) {

	oscillator = audioCtx.createOscillator();
	gainNode = audioCtx.createGain();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(audioCtx.destination);
	oscillator.frequency.value = freq;
	gainNode.gain.value = .2;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .01, 0.1); 
	oscillator.stop(audioCtx.currentTime + 1);

}

function bloopSound(freq) {

	oscillator = audioCtx.createOscillator();
	oscillator.type = 'sawtooth';
	gainNode = audioCtx.createGain();
	filterNode = audioCtx.createBiquadFilter();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainNode.connect(filterNode);
	filterNode.connect(audioCtx.destination);
	oscillator.frequency.value = freq;
	filterNode.frequency.value = 280;
	gainNode.gain.value = .2;
	gainNode.gain.setTargetAtTime(0, audioCtx.currentTime + .05, 0.1);	
	filterNode.frequency.setTargetAtTime(0, audioCtx.currentTime + .9, 700)
	oscillator.stop(audioCtx.currentTime + 1);

}



function sharpBass(freq) {

	oscillator = audioCtx.createOscillator();
	gainNode = audioCtx.createGain();
	filterNode = audioCtx.createBiquadFilter();
	oscillator.start();
	oscillator.connect(gainNode);
	gainNode.gain.value = 0;
	gainCorrect = audioCtx.createGain();
	gainCorrect.gain.value = .01;
	gainNode.connect(gainCorrect);
	gainCorrect.connect(filterNode);
	filterNode.connect(audioCtx.destination)
	filterNode.frequency.value = 500;
	oscillator.frequency.value = freq;
	gainNode.gain.value = .3;
	gainNode.gain.setTargetAtTime(200, audioCtx.currentTime + .025, 0.4);
	filterNode.frequency.setTargetAtTime(0, audioCtx.currentTime + .05, 0.1);
	oscillator.stop(audioCtx.currentTime + .1);
}

