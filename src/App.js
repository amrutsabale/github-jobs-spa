import React, { useState } from "react";
import useFetchjobs from "./useFetchjobs";
import Job from "./Job";
import { Container } from "react-bootstrap";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchjobs(params, page);
  return (
    <Container>
      {loading && <h2>...Loading</h2>}
      {error && <h2>Error occured ..refresh agains</h2>}
      {jobs.map((job) => {
        return <Job key={job.id} job={job} />;
      })}
    </Container>
  );
}

export default App;
