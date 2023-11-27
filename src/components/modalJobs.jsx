import { useSelector } from "react-redux";

const ModalJobs = () => {
  const description = useSelector((state) => state.generalJobs.description);
  return <div dangerouslySetInnerHTML={{ __html: description }} className="px-5 py-3" />;
};
export default ModalJobs;
