const SidePractice = ({ data }) => {
  const { firstName, lastName, clubs } = data;

  return (
    <>
      <h1>{`FullName: ${data?.firstName} ${data?.lastName}`}</h1>

      <h3>{`Clubs: ${data?.clubs.join(", ")}`}</h3>
    </>
  );
};

export default SidePractice;
