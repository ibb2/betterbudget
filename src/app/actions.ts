"use server";

import { parse } from "csv-parse";
import fs from "fs";

export async function processCSV(file: File | File[]) {
  console.log("Here");
  if (Array.isArray(file)) {
    throw new Error("Only one file can be processed at a time");
  }
  const fileContents = await file.text();

  return new Promise((resolve, reject) => {
    parse(
      fileContents,
      { bom: true, columns: true, skip_empty_lines: true },
      (err, records) => {
        if (err) reject(err);
        else resolve(records);
      },
    );
  });
}
