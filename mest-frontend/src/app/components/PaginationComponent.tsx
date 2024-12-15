import Link from "next/link";

interface PaginationProps {
  page: number;
  query?: Record<string, string | number | undefined>;
}

const PaginationComponent = ({ page, query = {} }: PaginationProps) => {
  const createPageLink = (targetPage: number) => ({
    pathname: "/",
    query: { ...query, page: targetPage },
  });

  return (
    <div className="join self-center">
      <Link
        href={createPageLink(page > 1 ? page - 1 : 1)}
        className="join-item btn"
      >
        «
      </Link>
      <div className="join-item btn">Page {page}</div>
      <Link href={createPageLink(page + 1)} className="join-item btn">
        »
      </Link>
    </div>
  );
};

export default PaginationComponent;
