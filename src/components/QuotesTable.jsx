import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActionIcons, MailIcon, EditIcon, EyeIcon } from "../icons";
import QuoteTypeBadge from "./QuoteTypeBadge";
import QuoteStatusBadge from "./QuoteStatusBadge";

const SkeletonRow = () => (
  <tr className="animate-pulse hidden md:table-row">
    {Array(7)
      .fill(0)
      .map((_, i) => (
        <td key={i} className="py-4 px-2">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
        </td>
      ))}
  </tr>
);

const QuotesTable = ({ onSelectQuote }) => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortField, setSortField] = useState("quoteId");
  const [sortAsc, setSortAsc] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const quotesPerPage = 5;

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/api/quotes.json");
      setQuotes(data);
    } catch (error) {
      console.error("Failed to fetch quotes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const sortedQuotes = [...quotes].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];
    if (aValue < bValue) return sortAsc ? -1 : 1;
    if (aValue > bValue) return sortAsc ? 1 : -1;
    return 0;
  });

  const totalPages = Math.ceil(sortedQuotes.length / quotesPerPage);
  const startIndex = (currentPage - 1) * quotesPerPage;
  const endIndex = startIndex + quotesPerPage;
  const paginatedQuotes = sortedQuotes.slice(startIndex, endIndex);

  const toggleSort = (field) => {
    if (sortField === field) {
      setSortAsc(!sortAsc);
    } else {
      setSortField(field);
      setSortAsc(true);
    }
  };

  return (
    <div className="mt-4  pb-6 bg-white border border-[#E5E7EB] rounded-[12px] p-6 w-full">
      <h2 className="text-[20px] leading-[28px] font-bold text-[#596774] font-['DM_Sans'] mb-4">
        Quotes
      </h2>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-4">
        {loading
          ? Array(3)
              .fill(0)
              .map((_, idx) => (
                <div key={idx} className="bg-gray-100 p-4 rounded-lg animate-pulse h-[120px]" />
              ))
          : paginatedQuotes.map((q) => (
              <div
                key={q.quoteId}
                className="border border-gray-200 rounded-lg p-4 shadow-sm"
              >
                <div className="flex justify-between mb-2">
                  <span className="font-bold text-sm text-[#032A44]">
                    Quote ID: #{q.quoteId}
                  </span>
                  <QuoteStatusBadge status={q.status} />
                </div>
                <div className="text-sm text-[#032A44] mb-1">
                  <span className="font-bold">Client Name:</span> {q.clientName}
                </div>
                <div className="text-sm text-[#032A44] mb-1 flex items-center gap-1">
                  <span className="font-bold">Type:</span>
                  <QuoteTypeBadge type={q.type} />
                </div>
                <div className="text-sm text-[#032A44] mb-1">
                  <span className="font-bold">Premium Amount:</span>{" "}
                  ${q.premiumAmount.toLocaleString()}
                </div>
                <div className="text-sm text-[#032A44] mb-1">
                  <span className="font-bold">Expiry Date:</span> {q.expireDate}
                </div>
                <div className="text-sm text-[#032A44] mb-3">
                  <span className="font-bold">Last Updated:</span> {q.lastUpdated}
                </div>
                <div className="flex justify-between gap-2">
                  <button className="w-full flex items-center justify-center gap-2 px-2 py-2 rounded-md border border-gray-300 text-sm text-[#032A44]">
                    <MailIcon className="w-4 h-4" />
                    Send Mail
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 px-2 py-2 rounded-md border border-gray-300 text-sm text-[#032A44]">
                    <EditIcon className="w-4 h-4" />
                    Edit
                  </button>
                </div>
                <button
                  onClick={() => onSelectQuote(q.quoteId)}
                  className="mt-2 w-full flex items-center justify-center gap-1 px-2 py-2 rounded-md border border-gray-300 text-sm text-[#032A44]"
                >
                  <EyeIcon className="w-4 h-4" />
                  View
                </button>
              </div>
            ))}
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block relative w-full">
        <table className="relative z-10 w-full text-left text-xs text-gray-500 border-separate border-spacing-0">
          <thead className="bg-[#E5E7EB] rounded-[8px] overflow-hidden">
            <tr>
              {[
                { key: "quoteId", label: "Quote ID" },
                { key: "clientName", label: "Client Name" },
                { key: "type", label: "Type" },
                { key: "status", label: "Status" },
                { key: "premiumAmount", label: "Premium Amount" },
                { key: "expireDate", label: "Expire Date" },
                { key: "lastUpdated", label: "Last Updated" },
              ].map((col) => (
                <th
                  key={col.key}
                  className="py-3 px-2 cursor-pointer text-[#032A44] text-[14px] font-normal"
                  onClick={() => toggleSort(col.key)}
                >
                  {col.label} {sortField === col.key ? (sortAsc ? "↑" : "↓") : ""}
                </th>
              ))}
              <th className="py-3 px-2 text-[#032A44] text-[14px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading
              ? Array(5).fill(0).map((_, i) => <SkeletonRow key={i} />)
              : paginatedQuotes.map((q) => (
                  <tr
                    key={q.quoteId}
                    className="border-t border-gray-100 hover:bg-gray-50"
                    onClick={() => onSelectQuote(q.quoteId)}
                  >
                    <td className="py-3 px-2 text-sm text-[#596774]">#{q.quoteId}</td>
                    <td className="py-3 px-2 text-sm text-[#596774]">{q.clientName}</td>
                    <td className="py-3 px-2">
                      <QuoteTypeBadge type={q.type} />
                    </td>
                    <td className="py-3 px-2">
                      <QuoteStatusBadge status={q.status} />
                    </td>
                    <td className="py-3 px-2 text-sm text-[#596774]">
                      ${q.premiumAmount.toLocaleString()}
                    </td>
                    <td className="py-3 px-2 text-sm text-[#596774]">{q.expireDate}</td>
                    <td className="py-3 px-2 text-sm text-[#596774]">{q.lastUpdated}</td>
                    <td className="py-3 px-2">
                      <ActionIcons />
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-center gap-2 text-sm text-gray-600">
        {Array.from({ length: totalPages }).map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                page === currentPage
                  ? "bg-gray-800 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuotesTable;
