import { useState } from "react";
import { photos } from "../../data/photos";
import Image from "../Image/Image";

export default function PhotoList() {
  const [photosArray, setPhotosArray] = useState(photos);

  function handleDelete(id: number) {
    setPhotosArray(photosArray.filter((photo) => photo.id !== id));
  }

  function handleRename(id: number) {
    const newName = prompt("New name, please");
    if (newName) {
      setPhotosArray(
        photosArray.map((photo) => {
          if (photo.id === id) {
            photo.title = newName;
            // return {...photo, title: newName};
          }

          return photo;
        })
      );
    }
  }

  return (
    <>
      <div>PhotoList</div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {photosArray.map((photo) => {
          return (
            <Image
              key={photo.id}
              photo={photo}
              onDelete={handleDelete}
              onRename={handleRename}
            />
          );
        })}
      </div>
    </>
  );
}
