const apiUrl = 'http://localhost:3000/api';


// Read file
async function readFile() {
    const fileName = document.getElementById("readFileName").value;
    if (!fileName.endsWith(".docx")) {
      document.getElementById("readContent").textContent =
        "Only world files are allowed";
      return;
    }
    const response = await fetch(`${apiUrl}/read?fileName=${fileName}`);
    const data = await response.json();
    if (data.content) {
      document.getElementById("readContent").textContent = data.content; 
    } else {
      document.getElementById("readContent").textContent = data.error;
    }
  }
  
  // Write file
  async function writeFile() {
    const fileName = document.getElementById("writeFileName").value;
    const content = document.getElementById("writeContent").value;
  
    if (!fileName.endsWith(".docx")) {
      alert("Only word files are allowed");
      return;
    }
  
    await fetch(`${apiUrl}/write`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, content }),
    });
  }
  
  // Append file
  async function appendFile() {
    const fileName = document.getElementById("appendFileName").value;
    const content = document.getElementById("appendContent").value;
  
    if (!fileName.endsWith(".docx")) {
      alert("Only docx files are allowed");
      return;
    }
  
    await fetch(`${apiUrl}/append`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fileName, content }),
    });
  }
  
  // Delete file
  async function deleteFile() {
    const fileName = document.getElementById("deleteFileName").value;
    if (!fileName.endsWith(".docx")) {
      alert("Only docx files are allowed");
      return;
    }
  
    await fetch(`${apiUrl}/delete?fileName=${fileName}`, { method: "DELETE" });
  }
  
  // Rename file
  async function renameFile() {
    const oldName = document.getElementById("oldFileName").value;
    const newName = document.getElementById("newFileName").value;
  
    if (!oldName.endsWith(".docx") || !newName.endsWith(".docx")) {
      alert("Only docx files are allowed");
      return;
    }
  
    await fetch(`${apiUrl}/rename`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ oldName, newName }),
    });
  }
  
  // Create directory
  async function createDirectory() {
    const dirName = document.getElementById("createDirName").value;
    await fetch(`${apiUrl}/create-dir`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ dirName }),
    });
  }
  
  // Delete directory
  async function deleteDirectory() {
    const dirName = document.getElementById("deleteDirName").value;
    await fetch(`${apiUrl}/delete-dir?dirName=${dirName}`, { method: "DELETE" });
  }