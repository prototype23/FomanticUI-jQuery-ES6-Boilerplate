const isEmpty = (val) => {
  if (typeof val === 'undefined') {
    return true;
  }

  if (val === null || val === 'null' || jQuery.trim(val) === '') {
    return true;
  }

  return false;
};

export default isEmpty;
