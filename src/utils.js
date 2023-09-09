export const range = (start, end, step = 1) => {
  if (typeof end === 'undefined') {
  
    end = start;
    start = 0;
  }

  if (step === 0) {
    throw new Error('Step cannot be zero.');
  }

  const output = [];
  for (let i = start; (step > 0 ? i < end : i > end); i += step) {
    output.push(i);
  }

  return output;
};

