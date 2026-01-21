import { motion } from 'framer-motion';
import React from 'react';

interface StyledTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  className?: string;
}

export const StyledTable = ({ headers, rows, className = '' }: StyledTableProps) => {
  return (
    <motion.div
      className={`overflow-hidden rounded-xl shadow-lg ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-gradient-to-r from-slate-800 to-slate-700">
            {headers.map((header, i) => (
              <motion.th
                key={i}
                className="px-4 py-3 text-left text-white font-semibold text-xs"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {header}
              </motion.th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white">
          {rows.map((row, rowIndex) => (
            <motion.tr
              key={rowIndex}
              className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: rowIndex * 0.05 + 0.1 }}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 py-2.5 text-slate-600 text-xs"
                >
                  {cell}
                </td>
              ))}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

// Reusable cell components for special formatting
export const CheckMark = () => (
  <span className="text-green-500 font-bold">&#10003;</span>
);

export const CrossMark = () => (
  <span className="text-red-500 font-bold">&#10007;</span>
);

export const WarningMark = () => (
  <span className="text-yellow-500 font-bold">&#9888;</span>
);
