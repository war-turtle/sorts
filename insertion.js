const insertionSort = arr => {
  let i = 1;
  const outerloop = () => {
    arr.highLightRed(i);
    let j = i - 1;
    arr.highLightGreen(j);
    const key = arr.getItem(i);
    arr.draw();
    const innerloop = () => {
      if (j >= 0 && key < arr.getItem(j)) {
        arr.highLightGreen(j);
        arr.update(arr.getItem(j), j + 1);
        arr.draw();
        j--;
        setTimeout(innerloop, 10);
      } else {
        arr.unHighLightRed(i);
        arr.update(key, j + 1);
        for (let x = j + 1; x <= i; x++) {
          arr.unHighLightGreen(x);
        }
        arr.highLightRed(j + 1);
        arr.draw();
        arr.unHighLightRed(j + 1);
        i++;
        if (i < arr.getSize()) {
          setTimeout(outerloop, 10);
        } else {
          for (let x = 0; x < arr.getSize(); x++) {
            arr.finishedIndex(x);
          }
          arr.draw();
        }
      }
    };
    arr.unHighLightGreen(j);
    setTimeout(innerloop, 10);
  };
  outerloop();
};

export default insertionSort;
