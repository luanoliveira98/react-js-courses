import type React from "react";
import {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../../../components/dialog";
import Button from "../../../components/button";
import InputText from "../../../components/input-text";
import Text from "../../../components/text";
import type { Photo } from "../../photos/models/photo";
import SelectCheckboxIllustration from "../../../assets/images/select-checkbox.svg?react";
import Skeleton from "../../../components/skeleton";
import PhotoImageSelectable from "../../photos/components/photo-image-selectable";

interface AlbumNewDialogProps {
  trigger: React.ReactNode;
}

export default function AlbumNewDialog({ trigger }: AlbumNewDialogProps) {
  const isLoadingPhotos = false;
  const photos: Photo[] = [
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
  ];

  function handleTogglePhoto(selected: boolean, photoId: string) {
    console.log(selected, photoId);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Create album</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Add a title" />

          <div className="space-y-3">
            <Text as="div" variant="label-small">
              Registered photos
            </Text>

            {!isLoadingPhotos && photos.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {photos.map((photo) => (
                  <PhotoImageSelectable
                    key={photo.id}
                    src={`/images/${photo.imageId}`}
                    title={photo.title}
                    imageClassName="w-20 h-20"
                    onSelectImage={(selected) =>
                      handleTogglePhoto(selected, photo.id)
                    }
                  />
                ))}
              </div>
            )}

            {isLoadingPhotos && (
              <div className="flex flex-wrap gap-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Skeleton
                    key={`photo-loading-${index}`}
                    className="w-20 h-20 rounded-lg"
                  />
                ))}
              </div>
            )}

            {!isLoadingPhotos && photos.length === 0 && (
              <div className="w-full flex flex-col justify-center items-center gap-3">
                <SelectCheckboxIllustration />
                <Text variant="paragraph-medium" className="text-center">
                  No photos available to select
                </Text>
              </div>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <Button>Create</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
