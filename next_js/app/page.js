import Image from "next/image";
import styles from "./page.module.css";
import BlogList from "./components/blogList";
export default function Home() {
  return (
    <>
      <BlogList />
    </>
  );
}
