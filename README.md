## Introduction

This is a small server made using only NodeJS which serves static HTML, CSS and JS files for your web development project.

#### File Structure used for code

Below is the type of file structure that is used when writing this server. You can create your own file structure and modify the server.js file according to your convenience.

```
|-- css
|    -- styles.css
|-- index.html
|-- js
|   |-- main.js
|    -- server.js
```

#### Extra information

-> The code uses `readBufferStream` which is a part of the `fs` module. The reason to use it is size of files. A buffer provides the text in the file in chunks providing a performance boost.
-> The server also makes use of `readStream.pipe()` which allows us to directly pipe the data of a readStream into a writeStream, basically allowing us to append to the response object, our CSS and JS files. 
