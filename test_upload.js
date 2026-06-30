const fs = require('fs');

async function testUpload() {
  try {
    const formData = new FormData();
    // Create a dummy text file to act as an image for testing
    fs.writeFileSync('dummy.jpg', 'fake image content');
    const blob = new Blob([fs.readFileSync('dummy.jpg')], { type: 'image/jpeg' });
    formData.append('image', blob, 'dummy.jpg');

    const res = await fetch("http://localhost/php-backend/api_upload.php", {
      method: "POST",
      body: formData
    });
    
    const text = await res.text();
    console.log("Response text:", text);
    
    try {
      const data = JSON.parse(text);
      console.log("Parsed JSON:", data);
    } catch(e) {
      console.log("Not JSON");
    }
  } catch(e) {
    console.error("Error:", e);
  }
}

testUpload();
