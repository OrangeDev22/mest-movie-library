import Link from "next/link";

interface PaginationProps {
  page: number;
  query?: Record<string, string | number | undefined>;
  paginationLimit?: number;
  redirectTo?: string;
}

const PaginationComponent = ({
  page,
  query = {},
  paginationLimit,
  redirectTo = "/",
}: PaginationProps) => {
  const createPageLink = (targetPage: number) => ({
    pathname: redirectTo,
    query: { ...query, page: targetPage },
  });

  return (
    <div className="join self-center">
      <Link
        href={createPageLink(1)}
        className={`join-item btn ${
          page <= 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        ««
      </Link>
      <Link
        href={createPageLink(page > 1 ? page - 1 : 1)}
        className={`join-item btn ${
          page <= 1 ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        «
      </Link>

      <div className="join-item btn">Page {page}</div>

      <Link
        href={createPageLink(page + 1)}
        className={`join-item btn ${
          paginationLimit && page === paginationLimit
            ? "opacity-50 pointer-events-none"
            : ""
        }`}
      >
        »
      </Link>
      <Link
        href={createPageLink(paginationLimit ? paginationLimit : 1)}
        className={`join-item btn ${
          paginationLimit && page === paginationLimit
            ? "opacity-50 pointer-events-none"
            : ""
        }`}
      >
        »»
      </Link>
    </div>
  );
};

export default PaginationComponent;
