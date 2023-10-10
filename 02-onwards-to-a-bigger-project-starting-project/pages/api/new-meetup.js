function hanler(req, res) {
  const method = req.method;
  const data = req.body;
  const { title, image, address, description } = data;

  if (method === 'POST') {
    console.log(method);
  }
}

export default hanler;
