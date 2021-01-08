// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async (req, res) => {
  if (req.query.website_url) {
    console.log(req.query.website_url);
    const url = "https://prism.ext.nile.works/api/v1/content/get?url=/";
    const apiKey = `&key=${process.env.API_KEY}`;
    const newURl = url + req.query.website_url+apiKey;
    // 
    try {
      const prismRes = await fetch(`${newURl}`);
      const json = await prismRes.json();
      if (json) {
        console.log('returning data');
        res.status(200).json({ data: json, success: true });
      } else {
        res.status(500).json({ data: null, success: false });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ data: null, success: false });
    }
  } else {
    res.status(500).json({ data: null, success: false });
  }
};
