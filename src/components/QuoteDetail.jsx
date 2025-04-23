import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ArrowLeftIcon,
  MailIcon,
  EditIcon,
  ActiveIcon,
  ExpiredIcon,
  DownLoadIcon,
  FollowUpIcon,
  ReminderIcon,
} from "../icons";
import QuoteStatusBadge from "./QuoteStatusBadge";

const QuoteDetail = ({ quoteId, onBack }) => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const { data } = await axios.get("/api/quotesDetail.json");
        const found = data.find((q) => String(q.quoteId) === String(quoteId));
        setQuote(found || null);
      } catch (err) {
        console.error("Failed to load quote detail", err);
        setQuote(null);
      } finally {
        setLoading(false);
      }
    };

    if (quoteId) fetchQuote();
  }, [quoteId]);

  if (loading) return <div className="p-6">Loading quote details...</div>;
  if (!quote) return <div className="p-6 text-red-500">Quote not found.</div>;

  return (
    <div className="w-full bg-white border border-gray-200 rounded-xl p-4 md:p-6">
<div className="flex flex-col sm:flex-row sm:items-start sm:gap-4 mb-4">
  {/* Mobile Header */}
  <div className="sm:hidden flex flex-col w-full">
  <div className="flex justify-between items-center w-full pb-2">
    <div className="flex items-center gap-2">
      <button onClick={onBack} className="flex items-center">
        <ArrowLeftIcon className="w-5 h-5 text-[#032A44]" />
      </button>
      <h2 className="text-[#596774] text-[16px] font-bold font-['DM_Sans']">
        Quote Details - #{quote.quoteId}
        <img src="/copy.svg" alt="Copy Icon" className="pl-2.5 inline" />
      </h2>
    </div>
    <button>
      <img src="/menuDot.svg" alt="Menu" className="w-5 h-5" />
    </button>
  </div>
  <div className="w-[100%] bg-gray-200 h-px" />
</div>

  {/* Desktop Header */}
  <div className="hidden sm:block">
    <button
      onClick={onBack}
      className="flex items-center text-[#032A44] font-['DM_Sans'] text-sm font-medium mb-2"
    >
      <ArrowLeftIcon className="w-5 h-5" />
      <span className="ml-2">Back</span>
    </button>
    <h2 className="text-[#596774] text-[20px] font-bold font-['DM_Sans']">
      Quote Details - #{quote.quoteId}
      <img src="/copy.svg" alt="Copy Icon" className="pl-2.5 inline" />
    </h2>
  </div>
</div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-18 text-sm text-gray-700">
        {/* Left Column */}
        <div className="space-y-4">
        <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Personal Details
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            
            <div className="relative w-[100px] h-[100px] mx-auto md:mx-0">
              <img
                src="/source.jpeg"
                alt="Client"
                className="w-full h-full rounded-[8px] object-cover"
              />
              <div className="absolute bottom-[-10px] right-[-10px] flex justify-center items-center px-[9px] py-[6px] w-[34px] h-[34px] rounded-[8px] bg-[#032A44]">
                <img src="/upimg.svg" alt="Update Icon" className="w-[22px] h-[22px] p-[1px]" />
              </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#032A44] font-['DM_Sans']">
              <div className="flex gap-1">
                <span className="font-bold">Customer ID:</span>
                <span className="font-normal">{quote.quoteId}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Full Name:</span>
                <span className="font-normal">{quote.clientName}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Gender:</span>
                <span className="font-normal">{quote.gender}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Occupation:</span>
                <span className="font-normal">{quote.occupation}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Contact Information
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              <div className="flex gap-1">
                <span className="font-bold">Mobile Phone:</span>
                <span className="font-normal">{quote.mobile}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Home Phone:</span>
                <span className="font-normal">{quote.homePhone}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Email:</span>
                <span className="font-normal">{quote.emailAdd}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Address:</span>
                <span className="font-normal">{quote.homeAdd}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Policy Information
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              <div className="flex gap-1">
                <span className="font-bold">Policy Type:</span>
                <span className="font-normal">{quote.policyType}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Policy Description:</span>
                <span className="font-normal">{quote.policyDescription}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Coverage Amount:</span>
                <span className="font-normal">{quote.coverageAmount}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Deductible:</span>
                <span className="font-normal">{quote.deductible}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Customer History
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              <div className="text-[12px] leading-4 font-bold text-[#032A44]">
                Previous Policies:
              </div>
              {quote.prevPolicy?.map((policy, index) => (
                <div key={index} className="flex justify-between items-center ml-4">
                  <span className="text-[10px] leading-4 font-normal">
                    {policy.label}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 px-2 py-[2px] ml-4 rounded-full text-[10px] font-bold ${
                      policy.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {policy.status === "Active" ? <ActiveIcon /> : <ExpiredIcon />}
                    <span className={`text-[10px] leading-4 ${
                      policy.status === "Active" ? "text-[#16A34A]" : "text-[#DC2626]"
                    }`}>
                      {policy.status}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-4">
          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Quote Status
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              <div className="flex gap-1 items-center">
                <span className="font-bold">Policy Type:</span>
                <QuoteStatusBadge status={'Pending'} > Approval</QuoteStatusBadge>
                <img src="/pending_app.svg" alt="Status Approval" className="ml-1" />
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Quotes Breakdown
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              <div className="flex gap-1">
                <span className="font-bold">Premium Amount:</span>
                <span className="font-normal">{quote.premiumAmount}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Annual Premium:</span>
                <span className="font-normal">{quote.annualPremium}</span>
              </div>
              <div className="text-[12px] leading-4 font-bold">
                Discounts Applied:
              </div>
              {quote.discounts?.map((discount, index) => (
                <div key={index} className="flex items-center ml-4 gap-2">
                <span className="text-[10px] md:text-xs">
                  {discount.label}:
                </span>
                <span className="text-[10px] md:text-xs text-[#DC2626]">
                  {discount.amount}
                </span>
              </div>
              ))}
              <div className="flex gap-1">
                <span className="font-bold">Total Charge:</span>
                <span className="font-normal">{quote.totalCharge} (after discounts)</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Tax:</span>
                <span className="font-normal">{quote.tax}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Final Premium:</span>
                <span className="font-normal">{quote.finalPremium}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Expiration and Effective Dates
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              <div className="flex gap-1">
                <span className="font-bold">Effective Date:</span>
                <span className="font-normal">{quote.effectiveDate}</span>
              </div>
              <div className="flex gap-1">
                <span className="font-bold">Expiration Date:</span>
                <span className="font-normal">{quote.expirationDate}</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
              Supporting Documents
              <div className="w-[50%] bg-gray-200 h-px" />
            </span>
            <div className="flex flex-col items-start gap-[14px] p-[12px]">
              {quote.supportingDocs?.map((doc, index) => (
                <div key={index} className="flex gap-1 items-center w-full">
                  <a
                    href={`/downloads/${doc}`}
                    download
                    className="text-[#032A44] underline text-sm"
                  >
                    {doc}
                  </a>
                  <img src="/download.svg" alt="Download" className="w-4 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-3 w-full md:w-[200px]">
          <span className="text-[#032A44] font-['DM_Sans'] text-[16px] leading-[24px] font-bold">
            Activity Log
            <div className="w-[50%] bg-gray-200 h-px" />
          </span>
          <div className="relative pl-2 border-l-2 border-[#E5E7EB]">
            {quote.activityLog?.map((item, idx) => (
              <div key={idx} className="relative mb-6">
                <div className="absolute -left-[15px] top-1 w-3 h-3 rounded-full bg-[#D1D5DB] border-2 border-white" />
                <div>
                  <p className="text-[#032A44] font-['DM_Sans'] text-[12px] leading-[24px] font-bold">
                    {item.date}
                  </p>
                  <p className="text-[14px] leading-[20px] font-normal text-[#032A44] mt-1 break-words">
                    {item.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="mt-6 pt-4 pb-6 flex flex-wrap justify-center md:justify-between gap-4">
  <button className="flex items-center justify-center gap-2 p-3 w-full md:flex-1 min-w-[150px] rounded-[6px] border border-[#E5E7EB] text-[#032A44] text-[12px] font-medium leading-[16px] hover:text-blue-600">
    <EditIcon className="w-4 h-4" />
    Update Details
  </button>
  <button className="flex items-center justify-center gap-2 p-3 w-full md:flex-1 min-w-[150px] rounded-[6px] border border-[#E5E7EB] text-[#032A44] text-[12px] font-medium leading-[16px] hover:text-blue-600">
    <FollowUpIcon className="w-4 h-4" />
    Add Follow Up
  </button>
  <button className="flex items-center justify-center gap-2 p-3 w-full md:flex-1 min-w-[150px] rounded-[6px] border border-[#E5E7EB] text-[#032A44] text-[12px] font-medium leading-[16px] hover:text-blue-600">
    <MailIcon className="w-4 h-4" />
    Send Mail
  </button>
  <button className="flex items-center justify-center gap-2 p-3 w-full md:flex-1 min-w-[150px] rounded-[6px] border border-[#E5E7EB] text-[#032A44] text-[12px] font-medium leading-[16px] hover:text-blue-600">
    <ReminderIcon className="w-4 h-4" />
    Send Reminder
  </button>
  <button className="flex items-center justify-center gap-2 p-3 w-full md:flex-1 min-w-[150px] rounded-[6px] border border-[#E5E7EB] text-[#032A44] text-[12px] font-medium leading-[16px] hover:text-blue-600">
    <DownLoadIcon className="w-4 h-4" />
    Download Quote
  </button>
</div>
    </div>
  );
};

export default QuoteDetail;