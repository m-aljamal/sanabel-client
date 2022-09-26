import { client } from "@/lib/sanity";
import { searchQuery } from "@/lib/queries";
const handler = async (req, res) => {
  const { search } = req.body;

  try {
    const data = await client.fetch(searchQuery, {
      search,
    });
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "There is an error please try again" });
  }
};

export default handler;
