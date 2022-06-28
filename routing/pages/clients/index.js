import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Max" },
    { id: "manu", name: "Manchester United" },
  ];

  return (
    <>
      <h1>Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}
              <Link
                href={{
                  pathname: "/clients/[id]",
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ClientsPage;
