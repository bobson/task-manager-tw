import ListTasks from "../components/ListTasks";

const Roadmap = ({ data }) => {
  const renderData = data.map((item) => (
    <ListTasks key={item.name} data={item} />
  ));
  return renderData;
};

export default Roadmap;
