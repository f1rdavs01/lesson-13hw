const url = "https://data-lesson-13.vercel.app";
export const phones = async (name) => {
  try {
    const res = await fetch(`${url}/${name}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.massage;
  }
};
export const getProduct = async (name, id) => {
  try {
    const res = await fetch(`${url}/${name}/${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return error.massage;
  }
};