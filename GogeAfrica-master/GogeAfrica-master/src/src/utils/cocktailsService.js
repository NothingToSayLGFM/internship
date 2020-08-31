class СocktailsService {
  static async get(url) {
    try {
      let res = await fetch(url);
      return await res.json();
    } catch (err) {
      console.log("get error");
      return "Error";
    }
  }

  static async post(url) {
    try {
      const response = await fetch(url, {
        method: "POST",
      });
      await response.json();
      if (response.code !== "404") {
        return response;
      }
    } catch (err) {
      console.log("post error");
      return "Error";
    }
  }

  static async put(url) {
    try {
      const response = await fetch(url, {
        method: "PUT",
      });
      await response.json();
      if (response.code !== "404") {
        return response;
      }
    } catch (err) {
      console.log("error put");
      return "Error";
    }
  }

  static async remove(url) {
    try {
      const response = await fetch(url, {
        method: "DELETE",
      });
      await response.json();
      if (response.code !== "404") {
        return await response.json();
      }
    } catch (err) {
      console.log("error remove");
      return "Error";
    }
  }
}

export default СocktailsService;
