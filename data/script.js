import words from "../js/words.js";
import {PaginatedData} from "./PaginatedData.js";

document.addEventListener("DOMContentLoaded", () => {
    new PaginatedData({list: words})
})
