const BASE_URL = "http://localhost:8000/";

export const checkClubName = async (name) => {
  const endpoint = "checkClubName";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("name", name);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};
export const createClub = async (
  name,
  description,
  category,
  profilepic,
  admin
) => {
  const endpoint = "createClub";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("name", name);
  formData.append("description", description);
  formData.append("category", category);
  formData.append("profilepic", profilepic);
  formData.append("admin", admin);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};


export const getUserData = async (account) => {
  const endpoint = "getUserData";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("account", account);

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};


export const editUserData = async (name, account, description, profilepic) => {
  const endpoint = "editUserData";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("name", name);
  formData.append("account", account);
  formData.append("description", description);
  formData.append("profilepic", profilepic);

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};
export const getClubs = async () => {
  const endpoint = "getClubs";
  const url = BASE_URL + endpoint;
  let formData = new FormData();

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};
export const getCategory = async (categoryId) => {
  const endpoint = "getCategory";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("categoryId", categoryId);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });

  return response;
};

export const getClubsNumber = async () => {
  const endpoint = "getClubsNumber";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};

export const getClubData = async (clubId) => {
  const endpoint = "getClubData";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("clubId", clubId);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};

export const getClubPosts = async (clubId) => {
  const endpoint = "getClubPosts";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("clubId", clubId);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};

export const createPost = async (content, clubId, postedBy) => {
  const endpoint = "createPost";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("content", content);
  formData.append("clubId", clubId);
  formData.append("postedBy", postedBy);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};


export const getMyClubs = async (account) => {
  const endpoint = "getMyClubs";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("account", account);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};


export const getMyPosts = async (account) => {
  const endpoint = "getMyPosts";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("account", account);
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};





// new code for comments and like 

export const createComment = async (clubId, postId, commented_by , comment) => {
  const endpoint = "createComment";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("clubId", clubId);
  formData.append("postId", postId);
  formData.append("commented_by", commented_by);
  formData.append("comment", comment);

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};


export const getPostComments = async (clubId , postId) => {
  const endpoint = "getPostComments";
  const url = BASE_URL + endpoint;
  let formData = new FormData();
  formData.append("clubId", clubId);
  formData.append("postId", postId);

  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};


export const PostLike = async (clubId, postId , liked_by) => {
  const endpoint = "PostLike" ;

  const url = BASE_URL + endpoint;
  let formData = new FormData();

  formData.append("clubId", clubId);
  formData.append("postId", postId);
  formData.append("liked_by", liked_by);
  
  const response = await fetch(url, { method: "POST", body: formData })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      return "Server error";
    });
  return response;
};


export const getPostLikes = async( clubId, postId ) =>{
  const endpoint = "getLikeCounts";
  const url = BASE_URL + endpoint;
  let formData = new FormData();

  formData.append("clubId" , clubId);
  formData.append("postId" , postId);

  const response = await fetch(url, { method: "POST", body: formData })
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    return "Server error";
  });
  return response;
  
}