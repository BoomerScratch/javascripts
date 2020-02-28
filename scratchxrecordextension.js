(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

if (!!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    }} else {
    ext._getStatus = function() {
        return {status: 1, msg: 'Your browser does not support the mediaDevices() API (which is needed). Try a different browser.'};
}};
recordings = []

ext.startrecord = function() {
navigator.mediaDevices.getUserMedia({
            audio: true
        }).then(function(stream) {
            gumStream = stream;
            recorder = new MediaRecorder(stream);
recorder.ondataavailable = function(e) {
objurl = URL.createObjectURL(e.data)
recordings.push(objurl)
};
            recorder.start();
        });
}

ext.stoprecord = function() {
recorder.stop();
gumStream.getAudioTracks()[0].stop();
}

ext.playrecord = function(recordingid) {
elem = document.createElement('audio')
elem.src = recordings[recordingid - 1]
elem.id = "playaudio"
elem.setAttribute("class","recordingaudio")
document.getElementsByTagName('body')[0].appendChild(elem)
document.getElementById('playaudio').play()
document.getElementById('playaudio').removeAttribute('id')
}

ext.stopplayrecord = function() {
var paras = document.getElementsByClassName('recordingaudio');
while(paras[0]) {
paras[0].parentNode.removeChild(paras[0]);
}
}

ext.totalrecorded = function() {
return recordings.length
}

ext._stop = function() {
var paras = document.getElementsByClassName('recordingaudio');
while(paras[0]) {
paras[0].parentNode.removeChild(paras[0]);
}
}
    // Block and block menu descriptions
    var descriptor = {
        blocks: [
[" ","start recording audio","startrecord"],
[" ","stop recording audio","stoprecord"],
[" ","play %n of recorded sounds","playrecord"],
[" ","stop recordings","stopplayrecord"],
["r","total sounds recorded","totalrecorded"],
        ],
    };
    // Register the extension
    ScratchExtensions.register('Recording', descriptor, ext);
})({});