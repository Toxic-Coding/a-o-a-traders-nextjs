"use client";
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import axios, { CancelTokenSource } from "axios";

import { Upload, X, AlertTriangle } from "lucide-react";
import { useToast } from "@/app/hooks/useToast";
import Button from "../Common/button";
import { Progress } from "../ui/progress";
import { Card } from "../ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import axiosInstance from "@/helpers/axiosInstance";

const CHUNK_SIZE = 1024 * 1024; // 1MB

type FileWithMeta = {
  file: File;
  progress: number;
  uploading: boolean;
  error?: string;
  cancelToken?: CancelTokenSource;
  uploaded: boolean;
};

const ACCEPTED_TYPES = [
  "text/csv",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
];

const Uploader: React.FC = () => {
  const [files, setFiles] = useState<FileWithMeta[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [showLeaveAlert, setShowLeaveAlert] = useState(false);
  const { showError, showInfo, showSuccess, showToast } = useToast();
  const isDirty = files.some((f) => !f.uploaded);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (isDirty) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [isDirty]);

  //   useEffect(() => {
  //     const handleRouteChange = (url: string) => {
  //       if (isDirty) {
  //         setShowLeaveAlert(true);
  //         throw "Route change aborted.";
  //       }
  //     };
  //     // @ts-ignore
  //     if (typeof window !== "undefined" && window.next) {
  //       // @ts-ignore
  //       window.next.router.events.on("routeChangeStart", handleRouteChange);
  //       return () => {
  //         // @ts-ignore
  //         window.next.router.events.off("routeChangeStart", handleRouteChange);
  //       };
  //     }
  //   }, [isDirty]);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles
      .filter(
        (file) =>
          ACCEPTED_TYPES.includes(file.type) ||
          file.name.endsWith(".csv") ||
          file.name.endsWith(".xls") ||
          file.name.endsWith(".xlsx")
      )
      .map((file) => ({
        file,
        progress: 0,
        uploading: false,
        uploaded: false,
      }));
    setFiles((prev) => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "text/csv": [".csv"],
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    multiple: true,
  });
  const uploadFile = async (fileWithMeta: FileWithMeta, idx: number) => {
    const { file } = fileWithMeta;
    let cancelToken = axios.CancelToken.source();

    setFiles((prev) =>
      prev.map((f, i) =>
        i === idx ? { ...f, uploading: true, cancelToken } : f
      )
    );

    try {
      const form = new FormData();
      form.append("files", file);

      await axiosInstance.post("/dashboard/upload-and-process", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        cancelToken: cancelToken.token,
        onUploadProgress: (progressEvent) => {
          const percent = (progressEvent.loaded / file.size) * 100;
          setFiles((prev) =>
            prev.map((f, i) =>
              i === idx
                ? {
                    ...f,
                    progress: Math.min(percent, 100),
                  }
                : f
            )
          );
        },
      });

      setFiles((prev) =>
        prev.map((f, i) =>
          i === idx
            ? { ...f, progress: 100, uploading: false, uploaded: true }
            : f
        )
      );
      showSuccess(`${file.name} uploaded successfully.`);
    } catch (error: any) {
      if (axios.isCancel(error)) {
        showInfo(`${file.name} upload aborted by user.`);
      } else {
        showError(`${file.name} upload failed: ${error.message}`);
      }
      setFiles((prev) =>
        prev.map((f, i) =>
          i === idx
            ? {
                ...f,
                uploading: false,
                error: error.message || "Upload failed",
              }
            : f
        )
      );
    }
  };

  const handleUpload = async () => {
    setIsUploading(true);
    for (let i = 0; i < files.length; i++) {
      if (!files[i].uploaded && !files[i].uploading) {
        // eslint-disable-next-line no-await-in-loop
        await uploadFile(files[i], i);
      }
    }
    setIsUploading(false);
  };

  const handleAbort = (idx: number) => {
    const file = files[idx];
    if (file.cancelToken) {
      file.cancelToken.cancel("Upload aborted by user.");
    }
    setFiles((prev) =>
      prev.map((f, i) =>
        i === idx ? { ...f, uploading: false, error: "Aborted by user" } : f
      )
    );
  };

  const handleRemove = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card
        className={`border-dashed border-2 ${
          isDragActive ? "border-blue-500" : "border-gray-300"
        } bg-white shadow-md`}
      >
        <div
          {...getRootProps()}
          className="flex flex-col items-center justify-center py-10 cursor-pointer"
        >
          <input {...getInputProps()} />
          <Upload className="w-10 h-10 text-blue-500 mb-2" />
          <h4 className="mb-2 text-lg font-semibold">
            Drag & Drop CSV or Excel files here
          </h4>
          <p className="text-sm text-gray-500">
            or click to select files (CSV, XLS, XLSX)
          </p>
        </div>
      </Card>

      {files.length > 0 && (
        <div className="mt-6 space-y-4">
          {files.map((f, idx) => (
            <Card
              key={f.file.name + idx}
              className="flex items-center justify-between p-3"
            >
              <div className="flex items-center space-x-4">
                <Upload className="w-5 h-5 text-blue-500" />
                <div>
                  <div className="font-semibold">{f.file.name}</div>
                  <div className="text-xs text-gray-500">
                    {(f.file.size / 1024).toFixed(2)} KB
                  </div>
                  {f.error && (
                    <div className="text-xs text-red-500">{f.error}</div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-32 flex items-center justify-center gap-2">
                  <Progress
                    value={Math.round(f.progress)}
                    max={100}
                    className={
                      f.error
                        ? "bg-red-500"
                        : f.uploaded
                        ? "bg-green-500"
                        : f.uploading
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }
                  />
                  <span>{Math.round(f.progress)}%</span>
                </div>
                {!f.uploaded && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleRemove(idx)}
                      disabled={f.uploading}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                    {f.uploading ? (
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleAbort(idx)}
                        disabled={!f.uploading}
                      >
                        Abort
                      </Button>
                    ) : null}
                  </>
                )}
              </div>
            </Card>
          ))}
          <div className="flex justify-end space-x-2">
            <Button
              onClick={handleUpload}
              disabled={files.every((f) => f.uploaded || f.uploading)}
              isLoading={isUploading}
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload
            </Button>
          </div>
        </div>
      )}

      <Dialog open={showLeaveAlert} onOpenChange={setShowLeaveAlert}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
              Leave Page?
            </DialogTitle>
            <DialogDescription>
              You have files selected or uploading. Leaving will lose your
              progress.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="destructive"
              onClick={() => {
                setShowLeaveAlert(false);
                window.location.reload();
              }}
            >
              Leave
            </Button>
            <Button variant="outline" onClick={() => setShowLeaveAlert(false)}>
              Stay
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Uploader;
