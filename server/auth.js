export function handleLogin(req, res) {
  const user = req.body;
  console.log(req.body);
  res.json({ message: "hello" });
}
