const API_URL = process.env.REACT_APP_API_URL;

const getBlogs = async (id) => {
  const url = id ? `${API_URL}/GetBLogs/${id}` : `${API_URL}/GetBLogs`;

  const response = await fetch(url);
  return await response.json();
};

export { getBlogs };
