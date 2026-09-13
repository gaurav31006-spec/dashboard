import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Loader2, Share2 } from 'lucide-react';

export default function ExportModal({ isOpen, onClose, accountName, dateRangeText }) {
  const [format, setFormat] = useState('PDF');
  const [isExporting, setIsExporting] = useState(false);
  const [exported, setExported] = useState(false);

  if (!isOpen) return null;

  const handleExport = () => {
    setIsExporting(true);
    setTimeout(() => {
      setIsExporting(false);
      setExported(true);
      setTimeout(() => {
        setExported(false);
        onClose();
      }, 1500);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-instagram-dark border border-instagram-border rounded-3xl p-6 shadow-2xl space-y-6">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-instagram-border pb-4">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-xl bg-instagram-blue/10 text-instagram-blue">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Export Insights Report</h3>
              <p className="text-xs text-neutral-400">@{accountName} • {dateRangeText}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-neutral-800 text-neutral-400 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Format Selection */}
        <div className="space-y-3">
          <label className="text-xs font-semibold text-neutral-300">Select Export Format</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setFormat('PDF')}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                format === 'PDF'
                  ? 'bg-instagram-blue/15 border-instagram-blue text-white shadow-md'
                  : 'bg-black/50 border-instagram-border text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <FileText className="w-5 h-5 mb-1 text-instagram-blue" />
              <p className="text-xs font-bold">Executive PDF</p>
              <p className="text-[10px] text-neutral-400">Branded Meta Report with visual charts</p>
            </button>

            <button
              onClick={() => setFormat('CSV')}
              className={`p-3.5 rounded-2xl border text-left transition-all ${
                format === 'CSV'
                  ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-md'
                  : 'bg-black/50 border-instagram-border text-neutral-400 hover:border-neutral-700'
              }`}
            >
              <Download className="w-5 h-5 mb-1 text-emerald-400" />
              <p className="text-xs font-bold">Raw CSV Data</p>
              <p className="text-[10px] text-neutral-400">Complete raw metrics spreadsheet</p>
            </button>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleExport}
          disabled={isExporting || exported}
          className="w-full py-3 rounded-2xl bg-ig-gradient hover:opacity-95 text-white font-bold text-sm shadow-xl shadow-instagram-pink/20 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
        >
          {isExporting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Generating {format} Report...</span>
            </>
          ) : exported ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-300" />
              <span>Report Downloaded!</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download {format} Report</span>
            </>
          )}
        </button>

      </div>
    </div>
  );
}
