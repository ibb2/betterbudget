"use client";

import { useState } from "react";
import { parse } from "csv-parse";
import { FileUploader } from "react-drag-drop-files";
import { processCSV } from "../actions";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const records = [];

  async function handleChange(file: File | File[]): void {
    console.log(file);
    const financialRecordsFileContents = await processCSV(file);
    console.log("File uploaded successfully");
    console.log("Financial records:", financialRecordsFileContents);
  }

  return (
    <div>
      <FileUploader handleChange={handleChange} name="file" />
    </div>
  );
}
