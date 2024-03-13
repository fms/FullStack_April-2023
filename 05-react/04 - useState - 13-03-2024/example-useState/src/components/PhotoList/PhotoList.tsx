import { useState } from "react";
import { photos } from "../../data/photos";

export default function PhotoList() {
  const [photosArray, setPhotosArray] = useState(photos);

  function handleDelete(id: number) {
    console.log("delete");
    setPhotosArray(photosArray.filter((photo) => photo.id !== id));
  }

  function handleRename(id: number) {
    console.log("rename");
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
            <div
              key={photo.id}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <h3>
                {photo.id} - {photo.title}
              </h3>
              <img src={photo.url} alt={photo.title} />
              <div>
                <button onClick={() => handleDelete(photo.id)}>Delete</button>
                <button onClick={() => handleRename(photo.id)}>Rename</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
