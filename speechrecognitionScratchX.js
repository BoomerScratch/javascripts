(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};
    
    // Check if browser supports speech recognition
if('speechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };
} else {
        ext._getStatus = function() {
        return {status: 0, msg: 'Sorry, your browser does not support speech recognition. Note that currently only Chrome supports speech recognition.'};
    };
}

ext.speechrecognitionstart = function(){
recognition.start()
document.getElementById('isonspeechrecognition').innerText = true
}

ext.speechrecognitionstop = function(){
recognition.stop()
document.getElementById('isonspeechrecognition').innerText = false
}

ext.speechrecognitionspoken = function(){
return document.getElementById('recognitiontext').innerText
}
    
ext.onspeechrecognition = function(){
if (document.getElementById('isonspeechrecognition').innerText == "false") {var ison = false} else {var ison = true}
return ison
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
var elem = document.createElement('h6')
elem.id = 'isonspeechrecognition'
document.getElementsByTagName('body')[0].appendChild(elem);
document.getElementById('isonspeechrecognition').innerText = false
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(e) {
document.getElementById('recognitiontext').innerText = e.results[0][0].transcript;
recognition.stop();
document.getElementById('isonspeechrecognition').innerText = false
};
})({});
