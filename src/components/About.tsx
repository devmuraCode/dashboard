import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../store/store";
import { getPost } from "../features/AuthByUserName/model/servic/loginUser";

const About = () => {
  const dispatch = useAppDispatch();
  const {post} = useAppSelector((state) => state.posts);

console.log(post);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);
  return (
    <div>
      <h1>ABOUT</h1>
    </div>
  );
};

export default About;
