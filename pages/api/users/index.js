import connectMongo from "@/database/conn";

export default async function handler(req, res) {
  connectMongo().catch(() =>
    res.status(405).json({ error: "Error in the Connection" }),
  );

  //Type of Request
  const { method } = req;

  switch (method) {
    case "GET":
      res.status(200).json({ method, name: "GET Resquest" });
      break;
    case "POST":
      res.status(200).json({ method, name: "POST Resquest" });
      break;
    case "PUT":
      res.status(200).json({ method, name: "PUT Resquest" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "DELETE Resquest" });
      break;
    default:
      res.setHeader("Allow", ["GEt", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
