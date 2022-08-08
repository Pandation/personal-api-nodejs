export default function isValid(data) {
    let valid = true;
    for (const key in data) {
      if (data[key] === "") {
        valid = false;
      }
    }
    return valid;
  }