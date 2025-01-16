import * as fs from "fs";
import * as path from "path";

export const lastNames: string[] = fs
    .readFileSync(path.join(__dirname, "../data/names/lastNames.txt"), "utf-8")
    .toString()
    .trim()
    .split("\n");
export const femaleFirstNames: string[] = fs
    .readFileSync(path.join(__dirname, "../data/names/femaleFirstNames.txt"), "utf-8")
    .toString()
    .trim()
    .split("\n");
export const maleFirstNames: string[] = fs
    .readFileSync(path.join(__dirname, "../data/names/maleFirstNames.txt"), "utf-8")
    .toString()
    .trim()
    .split("\n");
