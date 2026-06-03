import { useEffect, useState } from "react";

function FetchData() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [openId, setOpenId] = useState(null);
  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        setRecords(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecords();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="accordion">
      {records.map((record) => (
        <div className="accordion-item" key={record.id}>
          
          {/* Header */}
          <button
            type="button"
            className={`accordion-header ${
              openId === record.id ? "active" : ""
            }`}
            onClick={() => toggleAccordion(record.id)}
          >
            <span>{record.title}</span>

            <span className="accordion-icon">
              {openId === record.id ? "-" : "+"}
            </span>
          </button>

          {/* Body (NO animation, simple conditional render) */}
          {openId === record.id && (
            <div className="accordion-body">
              <p>{record.body}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FetchData