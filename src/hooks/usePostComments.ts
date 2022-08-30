import React, { useState } from "react";

import { commentService } from "@services/commentService";

import { TComment } from "@types"

const { getCommentsPost } = commentService;

const usePostComments = (id: number) => {
  const [commentsPost, setCommentsPost] = useState<TComment[]>([]);
  const [fetching, setFetching] = useState(false);
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const handleClickComments = () => {
    getCommentsPost({ id })
      .then((res) => {
        setSuccess(true);
        setCommentsPost(res.data);
      })
      .catch((error) => setMessage(error.message));
  };

  return { handleClickComments, commentsPost, success, message }
}

export default usePostComments;
