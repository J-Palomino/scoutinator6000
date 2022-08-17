import Link from "next/link";
import { useState } from "react";
import { useTeamDetailsQuery } from "../lib/viewer.graphql";
// Todo: setup apollo caching
// import { initializeApollo } from "../lib/apollo";

const Index = () => {
  const [formValue, setFormValue] = useState("");
  const [currentTeam, setCurrentTeam] = useState("6413");
  console.log("useQueary: ", useTeamDetailsQuery);
  const detailQuery = useTeamDetailsQuery;

  const { data } = useTeamDetailsQuery({
    variables: {
      teamNumber: currentTeam,
    },
  });
  console.log("useTeam query: ", data);

  return (
    <div>
      <Link href="/about">
        <a>about</a>
      </Link>{" "}
      page.
      <div>
        <form>
          <input
            type="text"
            placeholder="your new name..."
            onChange={(e) => setFormValue(e.target.value)}
          />
          <input
            type="button"
            value="change"
            onClick={() => setCurrentTeam(formValue)}
          />
        </form>
      </div>
      <div>
        <p>Current Team: </p>
        <p>{currentTeam}</p>
        <p>{JSON.stringify(data)}</p>
      </div>
    </div>
  );
};

export default Index;
