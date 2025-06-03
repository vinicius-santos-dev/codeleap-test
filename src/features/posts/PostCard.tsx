import { formatDistanceToNow } from "date-fns";
import { useState } from "react";
import editIcon from "../../assets/edit.svg";
import deleteIcon from "../../assets/trash.svg";
import { useUsername } from "../auth/context/useAuth";
import usePosts from "./hooks/usePosts";
import DeleteModal from "./modals/DeleteModal";
import EditModal from "./modals/EditModal";

const PostCard = () => {
  const [editingPostId, setEditingPostId] = useState<number | null>(null);
  const [deletingPostId, setDeletingPostId] = useState<number | null>(null);

  const { userName } = useUsername();
  const { posts } = usePosts();

  return (
    <div className="space-y-6">
      {posts.data?.results.map((post) => (
        <div
          key={post.id}
          className="rounded-2xl overflow-hidden flex flex-col"
        >
          <div className="h-[70px] flex justify-between items-center bg-primary text-white w-full p-6">
            <h2>{post.title}</h2>

            {userName === post.username && (
              <div className="flex items-center gap-6">
                <img
                  src={deleteIcon}
                  alt="Delete"
                  className="cursor-pointer"
                  onClick={() => setDeletingPostId(post.id)}
                />
                <img
                  src={editIcon}
                  alt="Edit"
                  className="cursor-pointer"
                  onClick={() => setEditingPostId(post.id)}
                />
              </div>
            )}
          </div>

          <div className="p-6 rounded-bl-2xl rounded-br-2xl border border-t-[#7695ec] border-[#999999]">
            <div className="mb-4 flex justify-between text-[#999999] text-[18px]">
              <p className="font-bold">@{post.username}</p>

              <p>
                {formatDistanceToNow(new Date(post.created_datetime), {
                  addSuffix: true,
                })}
              </p>
            </div>

            <p className="text-[18px] text-black">{post.content}</p>
          </div>

          <DeleteModal
            isOpen={deletingPostId === post.id}
            onClose={() => setDeletingPostId(null)}
            postId={post.id}
          />

          <EditModal
            isOpen={editingPostId === post.id}
            onClose={() => setEditingPostId(null)}
            postId={post.id}
            initialTitle={post.title}
            initialContent={post.content}
          />
        </div>
      ))}
    </div>
  );
};

export default PostCard;
