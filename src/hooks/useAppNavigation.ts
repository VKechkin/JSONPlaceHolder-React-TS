import { useNavigate } from "react-router-dom";


const useAppNavigation = () => {
  const navigate = useNavigate();

  const goMain = () => navigate("/");
  const goPosts = () => navigate("/posts");
  const goComments = () => navigate("/comments");
  const goAlbums = (id?: number) => navigate(id ? `/albums/${id}/photos` : "/albums");
  const goPhotos = () => navigate("/photos");
  const goTodos = () => navigate("/todos");
  const goUsers = () => navigate("/users");

  return { goMain, goPosts, goComments, goAlbums, goPhotos, goTodos, goUsers }
};

export default useAppNavigation;
