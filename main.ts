input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.Wedding), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
})
basic.forever(function () {
	
})
