const bubbleSort = arr => {
  let i = 0;
  const outerloop = () => {
    let j = 1;
    const innerloop = () => {
      if (arr.getItem(j - 1) > arr.getItem(j)) {
        arr.highLightGreen(j - 1);
        arr.highLightGreen(j);
        const temp = arr.getItem(j - 1);
        arr.update(arr.getItem(j), j - 1);
        arr.update(temp, j);
        arr.draw();
        arr.unHighLightGreen(j - 1);
        arr.unHighLightGreen(j);
      } else {
        arr.highLightRed(j - 1);
        arr.highLightRed(j);
        arr.draw();
        arr.unHighLightRed(j - 1);
        arr.unHighLightRed(j);
      }
      j++;
      if (j < arr.getSize() - i) {
        setTimeout(innerloop, 50);
      } else {
        i++;
        arr.finishedIndex(arr.getSize() - i);
        if (i < arr.getSize() - 1) {
          setTimeout(outerloop, 50);
        } else {
          arr.finishedIndex(arr.getSize() - i - 1);
          arr.draw();
        }
      }
    };
    innerloop();
  };
  outerloop();
};

export default bubbleSort;
