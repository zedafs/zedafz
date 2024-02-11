import React from 'react';

const App = () => {
  return (
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>JNV Kollam 26th Batch | Zedafs</title>
      <meta
        name="description"
        content="Explore the achievements and memories of the 26th batch of JNV Kollam school students. Get updates on events, activities, and more."
      />
      <meta name="keywords" content="Zedafz, 26th, JNV Kollam" />
      <meta name="author" content="RD Aswin" />
      <meta
        name="google-site-verification"
        content="iG51GH60DW64AuK-2nn5qYH6kVtGM8Bie5qHeYhPDak"
      />
      <link rel="stylesheet" href="style.css" />
    </head>
    
    <body>
      <div className="wrapper">
        <h1 className="floating-text">Zedafz, 26th Batch</h1>
        <div className="typing-container">
          <span className="typing-text"></span>
        </div>
    
        <div className="counter-container">
          <div id="countdown"></div>
        </div>
        <script src="script.js"></script>
      </div>
    </body>
    
    </html>
  );
};

export default App;
