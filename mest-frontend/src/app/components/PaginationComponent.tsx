import Link from "next/link";

interface PaginationProps {
  page: number;
}

const PaginationComponent = ({ page }: PaginationProps) => {
  return (
    <div className="join self-center">
      <Link
        href={{
          pathname: "/",
          query: {
            page: page > 1 ? page - 1 : 1,
          },
        }}
        className="join-item btn"
      >
        «
      </Link>
      <div className="join-item btn">Page {page}</div>
      <Link
        href={{
          pathname: "/",
          query: {
            page: page + 1,
          },
        }}
        className="join-item btn"
      >
        »
      </Link>
    </div>
  );
};

export default PaginationComponent;
