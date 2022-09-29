import { client } from "@/lib/sanity";
import { searchQuery } from "@/lib/queries";
const handler = async (req, res) => {
  const { search } = req.body;

  try {
    let data = await client.fetch(searchQuery, {
      search,
    });
    // grobByType = data.reduce((acc, curr) => {
    //   if (!acc[curr._type]) {
    //     acc[curr._type] = [];
    //   }
    //   acc[curr._type].push(curr);
    //   return acc;
    // }, {});
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "There is an error please try again" });
  }
};

export default handler;
