"use client";

import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";
//🛂🛂[CREATING NEW CONTENT]🛂🛂 Uploading and IMG

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(); //🌴🌴[PREVIEW IMAGE]🌴🌴
  const imageInput = useRef(); //🛂🛂[CREATING NEW CONTENT]🛂🛂 used to upload IMG's, from REACT, this is connected with the "ref=imageInput" from bellow 👇

  function handlePickClick() {
    imageInput.current.click();
  } //🛂🛂[CREATING NEW CONTENT]🛂🛂 we need this function to connect our customed Button with the <input .../> field that takes care of Uploading the IMG's, also check the "onClick={handlePickClick}" from the <button .../>

  function handleImageChange(event) {
    const file = event.target.files[0]; //🌴🌴[PREVIEW IMAGE]🌴🌴 we can set the [0] to multiple files, for ex. [5], meaning that the user can upload 6 IMG's bcs the numerrotation starts from 0, 0 being 1 by default

    if (!file) {
      setPickedImage(null);
      return; //🌴🌴[PREVIEW IMAGE]🌴🌴 this will check if the User did selected an IMG, if not than return, also the "setPickedImage(null)"
    }

    const fileReader = new FileReader(); //🌴🌴[PREVIEW IMAGE]🌴🌴 this will receive/read the IMG as an URL file/data

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    }; //🌴🌴[PREVIEW IMAGE]🌴🌴  this will receive/read the IMG as an URL file/data

    fileReader.readAsDataURL(file); //🌴🌴[PREVIEW IMAGE]🌴🌴  this will receive/read the IMG as an URL file/data
  } //🌴🌴[PREVIEW IMAGE]🌴🌴 this function will handle the uploading and take effect every time when the <input .../> from bellow has a new value/ uploaded an IMG, check the "onChange={...}" from the <input.../>

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        {/* 🌴🌴[PREVIEW IMAGE]🌴🌴 this <div>...</div> from above 👆 will take care of displaying the "previewed IMG" */}
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          // multiple //🌴🌴[PREVIEW IMAGE]🌴🌴 adding this "multiple" gives the possibility to the user to upload multiple IMG's
          onChange={handleImageChange}
          required
        />
        {/* 🛂🛂[CREATING NEW CONTENT]🛂🛂 ({label, name})=> name is a PROP that will take the IMG name as an ID or the way to find the path to that IMG. === the "id={name}" is related/connected with the "htmlFor={name}" from the <label ...> ... </label>, the "accept" will accept only the specific formats off IMG's that we tell, and the "name={name}" is important later for extracting that uploading IMG  ==== NOTE❗ the "className={classes.input}" contains a class that will hide the original INPUT of uploading the IMG, we did this to create our own INPUT editted button*/}

        {/* 🛂🛂[CREATING NEW CONTENT]🛂🛂 down we will found our Custom Button for Uploading IMG's 👇 */}
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
