
const authService = require("../../services/Authentication/authService");

const returnToken = async (req, res) => {
  try {
    const codigo = req.body;

    if (!codigo) {
      return res.status(400).json({ error: "Code is required" });
    }

    await authService.receiveCode(codigo);
    // res.status(201).send(code);
    // res.status(201).send(codigo);
    // await authService.receiveCode(codigo);
    // res.status(200).send({ message: "Código recebido com sucesso" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { returnToken };
