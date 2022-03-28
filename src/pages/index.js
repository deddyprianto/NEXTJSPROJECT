import dynamic from "next/dynamic";
const Home = dynamic(() => import("components/ChildComponent/Home"));

const index = () => <Home />;

export default index;
