const PDFMerger = require("pdf-merger-js");

var merger = new PDFMerger();

const mP = async (p1, p2) => {
  await merger.add(p1); //merge all pages. parameter is the path to file and filename.
  await merger.add(p2);
  // await merger.add(p2, 2); // merge only page 2 of pdf 2
  // await merger.add(p2, [1, 3]); // merge the pages 1 and 3
  // await merger.add(p2, "4, 7, 8"); // merge the pages 4, 7 and 8
  // await merger.add("p2", "3 to 5"); //merge pages 3 to 5 (3,4,5)
  // await merger.add("p2", "3-5"); //merge pages 3 to 5 (3,4,5)
  let d = new Date().getTime();

  await merger.save(`public/${d}.pdf`); //save under given name and reset the internal document
  return d;
};

module.exports = { mP };
