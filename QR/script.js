alert("Welcome To Qr Code Generator");
function qrgenerate(){
    let text =  encodeURIComponent(document.getElementById("data").value);
    let size = "150x150";
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}&data=${text}`;
    document.getElementById("qr").src = url;
    document.getElementById("do").href = url;

}