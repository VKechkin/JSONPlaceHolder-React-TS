import React from "react";

import { Box, Text, Heading } from "@chakra-ui/react";

import { Comment } from "@components";

import { TPost } from "@types";

import { useAppSelector } from "@hooks";

import CommentsButton from "@primitive/CommentsButton";

import usePostComments from "@hooks/usePostComments";

interface IProps {
  children?: React.ReactNode;
  post: TPost;
}

const Post: React.FC<IProps> = ({ post }) => {
  const { body, id, title, userId } = post;
  const users = useAppSelector((state) => state.user.list);
  const user = users.result.find((user) => user.id === userId);

  const { handleClickComments, commentsPost, success } = usePostComments(id);

  return (
    <Box bg="#437276" maxH="auto" padding={2}>
      <Heading as="h5" size="sm">
        {title}
      </Heading>
      <Text fontSize="sm">{body}</Text>
      <Text fontSize="sm">User name: {user?.name}</Text>
      <CommentsButton onClick={() => handleClickComments()}>
        Show comments
      </CommentsButton>
      {success &&
        commentsPost.map((comment) => {
          return <Comment comment={comment} key={`key-${comment.id}`} />;
        })}
    </Box>
  );
};

export { Post };
