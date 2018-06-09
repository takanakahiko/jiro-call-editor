const speech = new SpeechSynthesisUtterance()
speech.lang = 'ja-JP'
speech.pitch=1
speechSynthesis.speak(speech)

export default speech