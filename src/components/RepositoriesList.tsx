import { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const { searchRepositories } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.reducers.repositories
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    return setTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} value={term} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {data && (
        <h3>
          {data.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </h3>
      )}
    </div>
  );
};

export default RepositoriesList;
