function throttle(func, timeout) {
  let prevTime;
  return (...props) => {
    const now = Date.now();
    if (!prevTime || now - prevTime > timeout) {
      func(...props);
      prevTime = now;
    } else {
      alert("請勿連續觸發");
    }
  };
}

const func = (a, b) => {
  console.log(a + b);
};

const timeout = 2000;

const throttleFunc = throttle(func, timeout);
