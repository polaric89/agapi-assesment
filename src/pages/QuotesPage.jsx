import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import QuotesTable from "../components/QuotesTable";
import MonthlyOverview from "../components/MonthlyOverview";
import QuoteDetail from "../components/QuoteDetail";
import axios from "axios";

const QuotesPage = () => {
  const [selectedQuoteId, setSelectedQuoteId] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const { data } = await axios.get("/api/quotesDetail.json");
        console.log("Available IDs:", data.map((q) => q.quoteId));
        console.log("Looking for:", selectedQuoteId);
  
        const found = data.find((q) => q.quoteId.toString() === selectedQuoteId.toString());
        setSelectedQuote(found || null);
      } catch (err) {
        console.error("Failed to load quote detail", err);
        setSelectedQuote(null);
      } finally {
        setLoading(false);
      }
    };
  
    if (selectedQuoteId) {
      setLoading(true);
      fetchQuote();
    }
  }, [selectedQuoteId]);
  

  const handleSelectQuote = (quoteId) => {
    setSelectedQuoteId(quoteId);
  };
  

  const handleBack = () => {
    setSelectedQuoteId(null);
    setSelectedQuote(null);
  };

  return (
    <div className="w-full">
      <Header
        title={
          selectedQuote ? (
            <>
              <span className="hidden md:inline">Quote Details</span>
              <span className="md:hidden">Quotes</span>
            </>
          ) : (
            "Quotes"
          )
        }
        breadcrumb={
          selectedQuote
            ? `X Insurance > Quotes > Detailed View (#${selectedQuote.quoteId})`
            : "X Insurance > Quotes"
        }
      />
      {selectedQuoteId && loading ? (
        <div className="p-6 text-sm text-gray-500">Loading quote details...</div>
      ) : selectedQuote ? (
        <QuoteDetail quoteId={selectedQuoteId} onBack={handleBack} />
      ) : (
        <>
          <MonthlyOverview />
          <QuotesTable onSelectQuote={handleSelectQuote} />
        </>
      )}
    </div>
  );
};

export default QuotesPage;
