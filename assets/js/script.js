function updateFileName() {
    const fileInput = document.getElementById("fileInput");
    const fileLabel = document.getElementById("fileLabel");
    
    if (fileInput.files.length > 0) {
        fileLabel.textContent = fileInput.files[0].name;
    } else {
        fileLabel.textContent = "Upload your image";
    }
}
