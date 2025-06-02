import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { CreatePostData, Post, PostsResponse, UpdatePostData } from "../types/posts.types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const usePosts = () => {
  const queryClient = useQueryClient();

  const postsQuery = useQuery<PostsResponse>({
    queryKey: ["posts"],
    queryFn: async () => {
      const response = await fetch(BASE_URL);

      if (!response.ok) throw new Error("Failed to fetch posts");

      return response.json();
    },
  });

  const createPost = useMutation<Post, Error, CreatePostData>({
    mutationFn: async (newPost: CreatePostData) => {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });

      if (!response.ok) throw new Error("Failed to create post");

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const updatePost = useMutation<Post, Error, UpdatePostData>({
    mutationFn: async ({
      id,
      title,
      content,
    }: UpdatePostData) => {
      const response = await fetch(`${BASE_URL}/${id}/`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });

      if (!response.ok) throw new Error("Failed to update post");

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const deletePost = useMutation<void, Error, number>({
    mutationFn: async (id: number) => {
      const response = await fetch(`${BASE_URL}/${id}/`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Failed to delete post");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  return {
    posts: postsQuery,
    createPost: createPost,
    updatePost: updatePost,
    deletePost: deletePost,
  };
};

export default usePosts;
