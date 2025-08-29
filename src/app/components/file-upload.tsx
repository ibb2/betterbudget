"use client";

import { useState } from "react";
import { parse } from "csv-parse";
import { FileUploader } from "react-drag-drop-files";
import { processCSV } from "../actions";
import { ChartAreaDefault } from "@/components/ui/charts/yearly-breakdown";
import { MonthlyChartArea } from "@/components/ui/charts/monthly";

export default function FileUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [records, setRecords] = useState<any>();

  async function handleChange(file: File | File[]): void {
    console.log(file);
    const financialRecordsFileContents = await processCSV(file);
    setRecords(financialRecordsFileContents);
    console.log("File uploaded successfully");
    console.log("Financial records:", financialRecordsFileContents);
  }

  return (
    <div>
      <FileUploader handleChange={handleChange} name="file" />
      <MonthlyChartArea data={records} />
    </div>
  );
}
