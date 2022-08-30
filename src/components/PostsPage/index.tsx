import React, { useEffect } from "react";

import { Container, SimpleGrid, Text } from "@chakra-ui/react";

import { Post, Paginator } from "@components";

import ActionButton from "@primitive/ActionButton";

import { useAppSelector, useAppDispatch } from "@hooks";
import useAppNavigation from "@hooks/useAppNavigation";

import { getPostsThunk, updatePage } from "@store/postSlice";
import { getUserThunk } from "@store/userSlice";

const PostsPage = () => {
  const posts = useAppSelector((state) => state.post.list);

  const { goMain } = useAppNavigation();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (posts.dto != null) {
      dispatch(getPostsThunk({ page: posts.dto.page, limit: posts.dto.limit }));
    }
  }, [posts.dto]);

  useEffect(() => {
    if (!posts.fetching) {
      dispatch(getUserThunk({}));
    }
  }, []);

  return (
    <div className="container">
      <ActionButton onClick={goMain}>Back Main</ActionButton>
      <Text fontSize="lg">Posts</Text>
      <Paginator
        page={posts.dto?.page}
        limit={posts.dto?.limit}
        total={100}
        action={updatePage}
      />
      <Container maxW="1024px">
        <SimpleGrid columns={1} spacing={5} paddingBottom={10}>
          {posts.result.map((post) => {
            return <Post post={post} key={`key-${post.id}`} />;
          })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export { PostsPage };
