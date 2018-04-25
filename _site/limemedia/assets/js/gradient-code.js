var gradientContain = document.getElementById("canvas-basic");
if ( gradientContain ) {
	var granimInstance = new Granim({
			element: '#canvas-basic',
			name: 'basic-gradient',
			direction: 'left-right',
			opacity: [1, 1],
			isPausedWhenNotInView: true,
			states : {
				"default-state": {
				gradients: [
					['#DA22FF', '#9733EE'],
					['#AA076B', '#61045F'],
					['#02AAB0', '#00CDAC']
				]
			}
		}
	});
}