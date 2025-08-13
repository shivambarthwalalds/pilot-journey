import { urlConstants } from "@/constants/Urlconstant";
import axios from "axios";

export default class IndexController {
  getAllBlogs = async () => {
    try {
      const response = await axios.get(urlConstants.Allblogs, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic eW91cl9vZG9vX3VzZXJuYW1lOnlvdXJfcGFzc3dvcmQ=",
          Cookie:
            "frontend_lang=en_US; session_id=6QBfJudn3I3R2FWgrADXpkuhuTUpVYb2mTKJMrDuBx3vqJdpiMz5bjzM4SuA8C14Woi3vWXiRy5ImrQCm7OY", // 👈 your session ID
        },
      });

      return response.data;
    } catch (err: any) {
      console.error("API ERROR:", err.response?.data || err.message);
      throw err;
    }
  };
  getSingleBlog = async (id: any) => {
    try {
      const fullUrl = `${urlConstants.Singleblog}?id=${id}`;
      console.log("➡️ API URL:", fullUrl);

      const response = await axios.get(fullUrl, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Basic eW91cl9vZG9vX3VzZXJuYW1lOnlvdXJfcGFzc3dvcmQ=",
          Cookie:
            "frontend_lang=en_US; session_id=6QBfJudn3I3R2FWgrADXpkuhuTUpVYb2mTKJMrDuBx3vqJdpiMz5bjzM4SuA8C14Woi3vWXiRy5ImrQCm7OY",
        },
      });

      console.log("✅ Response:", response.data);
      return response.data;
    } catch (err: any) {
      console.error("❌ Error Status:", err.response?.status);
      console.error("❌ Error Data:", err.response?.data);
      throw err;
    }
  };
}
