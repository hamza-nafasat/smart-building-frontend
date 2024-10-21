import React, { useState } from "react";
import Button from "../../../globalComponents/shared/button/Button";
import { useDropzone } from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { DeleteIcon, EditIcon } from "../../../assets/svgs";
import Modal from "../../../globalComponents/shared/Modal";

const UploadPhotos = ({ setCurrentStep }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);
  const [croppedImages, setCroppedImages] = useState({});
  const [modal, setModal] = useState(false);

  const modalOpenHandler = (file, index) => {
    setModal(true);
    onEditImage(file, index);
  };
  const modalCloseHandler = () => {
    setModal(false);
    setCurrentImage(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    multiple: true,
    onDrop: (acceptedFiles) => {
      const filesWithPreview = acceptedFiles.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImages((prev) => [...prev, ...filesWithPreview]);
    },
  });

  const onCrop = () => {
    if (currentImage && currentImage.cropper) {
      const croppedData = currentImage.cropper.getCroppedCanvas().toDataURL();
  
      setCroppedImages((prev) => ({
        ...prev,
        [currentImage.index]: croppedData,
      }));
      setCurrentImage(null);
      setModal(false); 
    }
  };

  const onEditImage = (image, index) => {
    setCurrentImage({ ...image, index });
  };

  const buttonClickHandler = () => setCurrentStep((prevStep) => prevStep + 1);

  return (
    <div>
      <h4 className="text-[#414141] text-lg md:text-xl font-medium text-center">
        Upload Photos
      </h4>
      <div className="flex items-center flex-wrap justify-center gap-4 mt-5">
        {images.length > 0 &&
          images.map((file, index) => (
            <div key={index} className="relative basis-[24%]">
              <img
                className="h-[240px] w-full object-cover rounded-md border"
                src={croppedImages[index] || file.preview}
                alt={`Preview ${index}`}
              />
              <div className="absolute top-2 right-2 flex space-x-1 bg-[#00000089] p-1 rounded-md">
                <div
                  className="cursor-pointer"
                  onClick={() => modalOpenHandler(file, index)}
                >
                  <EditIcon />
                </div>
                <div
                  className="cursor-pointer"
                  onClick={() =>
                    setImages(images.filter((_, i) => i !== index))
                  }
                >
                  <DeleteIcon />
                </div>
              </div>
            </div>
          ))}
      </div>

      <div
        className="my-4 border border-dashed border-[#414141CC] text-base flex items-center justify-center gap-1 p-4 rounded-lg cursor-pointer relative"
        {...getRootProps()}
      >
        <input
          {...getInputProps()}
          className="absolute inset-0 z-[99] cursor-pointer opacity-0"
        />
        <p className="text-[#41414199]">Drop your file here or</p>
        <span className="text-[#000]">browse</span>
      </div>

      {modal && (
        <Modal onClose={modalCloseHandler} title="Crop Image">
          <div className="w-full mt-4">
            <Cropper
              src={currentImage?.preview}
              style={{ height: 400, width: "100%" }}
              aspectRatio={16 / 9}
              guides={false}
              onInitialized={(instance) =>
                setCurrentImage((prev) => ({ ...prev, cropper: instance }))
              }
            />
            <div className="flex justify-end mt-4">
              <Button onClick={onCrop} text="Save Crop" width="w-[153px]" />
            </div>
          </div>
        </Modal>
      )}

      <div className="flex flex-wrap items-center justify-end gap-4">
        <Button
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
          textColor="#007aff"
          borderColor="#007aff"
          text="Back"
          width="w-[153px]"
          bg="text-primary border-primary border-[1px] hover:bg-primary hover:text-white"
        />
        <Button onClick={buttonClickHandler} text="Next" width="w-[153px]" />
      </div>
    </div>
  );
};

export default UploadPhotos;
