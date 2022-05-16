import React, { useState } from "react";
import {
  HvDialogContent,
  HvDialog,
  HvDialogTitle,
  HvFileUploader,
  HvFileUploaderPreview,
  File,
} from "@hitachivantara/uikit-react-core";
import { useHistory } from "react-router-dom";
import { Project } from "types/project";
import { Code, DocWord } from "@hitachivantara/uikit-react-icons";
import useStyles from "./styles";

interface FileuploaderProps {
  data: Project;
}

const Fileuploader: React.FC<FileuploaderProps> = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<any>(false);
  const [previewTitle, setPreviewTitle] = useState("");
  const openDialog = (url: string, title: React.SetStateAction<string>) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
    setOpen(true);
  };

  function addFile(
    file: File | Blob | MediaSource,
    setList: (arg0: {
      (previousList: any): any[];
      (previousList: any): any[];
      (previousList: any): any[];
    }) => void
  ) {
    const newFile = file;

    // see https://developer.mozilla.org/en-US/docs/Web/API/File/Using_files_from_web_applications#using_object_urls
    // specially to understand the need to explicitly call URL.revokeObjectURL() in Single Page Applications.
    const url = URL.createObjectURL(file as Blob);

    (newFile as File).preview = (
      <HvFileUploaderPreview
        onClick={() => openDialog(url, (file as File).name)}
        // onUnload={() => {
        //   URL.revokeObjectURL(url);
        // }}
        aria-label={`Open preview of ${(file as File).name}`}
      >
        <img alt={`Thumbnail of ${(file as File).name}`} src={url} />
      </HvFileUploaderPreview>
    );

    const hasFailed = (file as File).status === "fail";

    // if (!hasFailed) {
    //   newFile.status = "progress";
    //   newFile.progress = 0;

    //   simulateUpload(
    //     newFile,
    //     (progress: any) => {
    //       newFile.progress = progress;

    //       setList((previousList: any) => [...previousList]);
    //     },
    //     () => {
    //       newFile.status = "success";

    //       // the file preview could be set here instead
    //       // using a server side URL, for instance

    //       setList((previousList: any) => [...previousList]);
    //     }
    //   );
    // }

    setList((previousList: any) => [newFile, ...previousList]);
  }

  const removeFile = (
    fileToRemove: File,
    setList: (arg0: (previousList: any) => any) => void
  ) => {
    // if (fileToRemove.status === "progress") {
    //   cancelUpload(fileToRemove);
    // }

    setList((previousList: any[]) =>
      previousList.filter((file: any) => file !== fileToRemove)
    );
  };

  const [list, setList] = useState<any>([
    {
      id: "1",
      name: "already_here.jpg",
      size: 5000,
      status: "success",
      preview: (
        <HvFileUploaderPreview
          aria-label="Open the bigger preview"
          onClick={() => openDialog("", "already_here.jpg")}
        >
          <img alt="Small preview of the uploaded file" src="" />
        </HvFileUploaderPreview>
      ),
    },
    {
      id: "2",
      name: "code.yaml",
      size: 200,
      status: "success",
      preview: <Code />,
    },
    {
      id: "3",
      name: "letter.docx",
      size: 2000,
      status: "success",
      preview: (
        <HvFileUploaderPreview
          aria-label="Open preview of the document (not!)"
          onClick={() => {}}
          disableOverlay
        >
          <DocWord />
        </HvFileUploaderPreview>
      ),
    },
  ]);

  return (
    <>
      <HvFileUploader
        acceptedFiles={["image/*"]}
        labels={{
          sizeWarning: "Maximum file size:",
          acceptedFiles: "Pick an image",
        }}
        fileList={list}
        onFilesAdded={(newFiles) => {
          newFiles.forEach((newFile) => addFile(newFile, setList));
        }}
        onFileRemoved={(removedFile) => {
          removeFile(removedFile, setList);
        }}
      />
      <HvDialog open={open} onClose={() => setOpen(false)}>
        <HvDialogTitle>{previewTitle}</HvDialogTitle>
        <HvDialogContent>
          <img
            alt="Preview of the uploaded file"
            src={previewUrl}
            style={{ maxWidth: "100%", maxHeight: "70vh" }}
          />
        </HvDialogContent>
      </HvDialog>
    </>
  );
};

export default Fileuploader;
