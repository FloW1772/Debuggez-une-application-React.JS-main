import PropTypes from "prop-types";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

const DataContext = createContext({});

export const api = {
  loadData: async () => {
    const json = await fetch("/events.json");
    return json.json();
  },
};

export const DataProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [last, setLast] = useState(null); // Added state for last event

  const getData = useCallback(async () => {
    try {
      const datasApi = await api.loadData();
      setData(datasApi);
      // Update last event using a separate sort and assignment in useEffect
      setLast(datasApi?.events.sort((a, b) => new Date(b.date) < new Date(a.date) ? -1 : 1)[0]); // Sort by date descending and grab first item
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    if (data) return; // Exit if data already loaded
    getData();
  }); // Make getData rerun if data changes

  return (
    <DataContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        data,
        last, // Include last in the context value
        error,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useData = () => useContext(DataContext);

export default DataContext;
