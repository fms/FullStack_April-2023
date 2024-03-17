import { Photo } from "../../types/Product";

interface PhotoPros {
  photo: Photo;
  onDelete: (id: number) => void;
  onRename: (id: number) => void;
}

export default function Image({ photo, onDelete, onRename }: PhotoPros) {
  return (
    <div key={photo.id} style={{ display: "flex", flexDirection: "column" }}>
      <h3>
        {photo.id} - {photo.title}
      </h3>
      <img src={photo.url} alt={photo.title} />
      <div>
        <button onClick={() => onDelete(photo.id)}>Delete</button>
        <button onClick={() => onRename(photo.id)}>Rename</button>
      </div>
    </div>
  );
}
