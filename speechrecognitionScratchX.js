(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

ext.speechrecognitionstart = function(){
recognition.start()
var isonspeechrecognition = true
}

ext.speechrecognitionstop = function(){
recognition.stop()
var isonspeechrecognition = false
}

ext.speechrecognitionspoken = function(){
return document.getElementById('recognitiontext').innerText
}
    
ext.onspeechrecognition = function(){
return isonspeechrecognition
}
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
[" ","start speech recognition","speechrecognitionstart"],
[" ","stop speech recognition","speechrecognitionstop"],
["r","spoken","speechrecognitionspoken"],
["b","on speech recognition?","onspeechrecognition"],
        ],
    };

    // Register the extension
    ScratchExtensions.register('Speech recognition', descriptor, ext);
var elem = document.createElement('h6')
elem.id = 'recognitiontext'
document.getElementsByTagName('body')[0].appendChild(elem);
var isonspeechrecognition = false
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(e) {
document.getElementById('recognitiontext').innerText = e.results[0][0].transcript;
recognition.stop()
var isonspeechrecognition = false
};
})({});
