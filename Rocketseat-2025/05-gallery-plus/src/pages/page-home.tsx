import Container from "../components/container";
import AlbumsFilter from "../contexts/albums/components/albums-filter";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <AlbumsFilter
        albums={[
          { id: "1", title: "Sample Album" },
          { id: "2", title: "Sample Album 2" },
          { id: "3", title: "Sample Album 3" },
          { id: "4", title: "Sample Album 4" },
        ]}
        className="mb-9"
      />
      <PhotosList
        photos={[
          {
            id: "1",
            title: "Sample Photo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Sample Album" },
              { id: "2", title: "Sample Album 2" },
              { id: "3", title: "Sample Album 3" },
              { id: "4", title: "Sample Album 4" },
            ],
          },
          {
            id: "2",
            title: "Sample Photo",
            imageId: "portrait-tower.png",
            albums: [
              { id: "1", title: "Sample Album" },
              { id: "2", title: "Sample Album 2" },
              { id: "3", title: "Sample Album 3" },
              { id: "4", title: "Sample Album 4" },
            ],
          },
        ]}
      />
    </Container>
  );
}
