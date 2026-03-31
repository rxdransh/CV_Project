# AI Background Remover

A lightweight **web-based AI background removal tool** built using **HTML, CSS, and JavaScript**.  
The application uses **TensorFlow.js** and the **BodyPix model** to perform **person segmentation directly in the browser**, allowing users to remove image backgrounds without relying on external APIs.

This project demonstrates how **client-side machine learning** can be integrated into modern web applications.

---

## Features

- Upload an image from your device  
- Automatic **AI-based background removal**  
- Runs completely **in the browser**  
- No external APIs required  
- Download the processed image  
- Modern and responsive UI  
- Drag and drop image upload interface  

---

## Technologies Used

- **HTML5** – Structure of the application  
- **CSS3** – Modern UI styling and layout  
- **JavaScript (ES6)** – Application logic  
- **TensorFlow.js** – Machine learning in the browser  
- **BodyPix Model** – Person segmentation for background removal  

---

## How It Works

1. The user uploads an image.  
2. The image is loaded into a **canvas element**.  
3. The **BodyPix model** analyzes the image and identifies pixels belonging to a person.  
4. Background pixels are made **transparent**.  
5. The processed image is rendered on the canvas.  
6. The user can **download the result**.  

---

## Project Structure

```
background-remover

├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Installation & Usage

### 1. Download or clone the repository

```bash
git clone https://github.com/yourusername/background-remover.git
```

### 2. Open the project folder

### 3. Run the project by opening

```
index.html
```

in your browser.

No server or installation is required since the project runs completely in the browser.

---

## Limitations

- Works best with **human subjects**  
- Performance depends on **device hardware**  
- Complex backgrounds may not always produce perfect results  

---

## Future Improvements

- Before/After image comparison slider  
- Support for object segmentation  
- Background replacement options  
- Image cropping tools  
- Drag-and-drop preview animation  
- Faster ML models  

---

## Learning Outcomes

This project demonstrates:

- Integrating **machine learning models in web applications**  
- Using **TensorFlow.js for browser-based AI**  
- Image processing with the **HTML Canvas API**  
- Creating interactive **front-end interfaces**

---

## License

This project is open-source and available under the **MIT License**.
