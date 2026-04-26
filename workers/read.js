// obtain input element through DOM

var file = document.getElementById('file').files[0];
if(file)
{
  // create an identical copy of file
  // the two calls below are equivalent

  var fileClone = file.slice();
  var fileClone2 = file.slice(0, file.size);

  // slice file into 1/2 chunk starting at middle of file
  // Note the use of negative number

  var fileChunkFromEnd = file.slice(-(Math.round(file.size/2)));

  // slice file into 1/2 chunk starting at beginning of file

  var fileChunkFromStart = file.slice(0, Math.round(file.size/2));

  // slice file from beginning till 150 bytes before end

  var fileNoMetadata = file.slice(0, -150, "application/experimental");
}
