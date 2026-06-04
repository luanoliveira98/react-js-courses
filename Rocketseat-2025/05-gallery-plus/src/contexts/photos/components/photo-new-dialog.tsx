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
import Alert from "../../../components/alert";
import InputSingleFile from "../../../components/input-single-file";
import ImagePreview from "../../../components/image-preview";
import Text from "../../../components/text";
import Skeleton from "../../../components/skeleton";
import { useForm } from "react-hook-form";

interface PhotoNewDialogProps {
  trigger: React.ReactNode;
}

export default function PhotoNewDialog({ trigger }: PhotoNewDialogProps) {
  const form = useForm();

  const isLoadingAlbum = false;
  const albums = [
    { id: "1", title: "Sample Album" },
    { id: "2", title: "Sample Album 2" },
    { id: "3", title: "Sample Album 3" },
    { id: "4", title: "Sample Album 4" },
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Add photo</DialogHeader>

        <DialogBody className="flex flex-col gap-5">
          <InputText placeholder="Add a title" maxLength={255} />

          <Alert>
            Max size: 50MB
            <br />
            You can select files in PNG, JPG or JPEF
          </Alert>

          <InputSingleFile
            form={form}
            allowedExtensions={["png", "jpg", "jpeg"]}
            maxFileSizeInMB={50}
            replaceBy={<ImagePreview className="w-full h-56" />}
          />

          <div className="space-y-3">
            <Text variant="label-small">Select albums</Text>

            <div className="flex flex-wrap gap-3">
              {!isLoadingAlbum &&
                albums.length > 0 &&
                albums.map((album) => (
                  <Button
                    key={album.id}
                    variant="ghost"
                    size="sm"
                    className="truncate"
                  >
                    {album.title}
                  </Button>
                ))}

              {isLoadingAlbum &&
                Array.from({ length: 5 }).map((_, index) => (
                  <Skeleton
                    className="h-7 w-20"
                    key={`album-loading-${index}`}
                  />
                ))}
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>

          <Button>Add</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
