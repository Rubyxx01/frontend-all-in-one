"use client";

import { useState } from "react";
import DataJson from "../Data.json";


export default function HomePage() {
    const [search, setSearch] = useState("");

    const filteredData = DataJson.filter((item) => {
        const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
        return (
            fullName.includes(search.toLowerCase()) ||
            item.id.toString().includes(search)
        );
    });

    return (
        <div className="w-full min-h-dvh bg-gradient-to-br from-slate-50 via-white to-indigo-50">
            <div className="flex flex-col items-center pt-10 pb-6">
                <img
                    src="https://nhs.edu.mn/favicon.ico"
                    alt="Logo"
                    className="w-36 h-36 rounded-2xl object-cover shadow-lg ring-4 ring-white"
                />
            </div>
            <div className="flex justify-center px-6 mb-8">
                <div className="relative w-full max-w-md">
                    <svg
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search by name or ID…"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-700 placeholder:text-slate-400 placeholder:font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    />
                    <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {filteredData.length} result{filteredData.length !== 1 && "s"}
                    </span>
                </div>
            </div>

        
            <main className="max-w-7xl mx-auto px-6 pb-20">
                {filteredData.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-slate-400">
                        <svg
                            className="w-16 h-16 mb-4 opacity-40"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.2}
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                            />
                        </svg>
                        <p className="text-lg font-medium">No members found</p>
                        <p className="text-sm mt-1">Try a different search </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                        {filteredData.map((item) => {
                            const isStudent = item.type === "Student";

                            return (
                                <div
                                    key={item.id}
                                    className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 overflow-hidden"
                                >
                                    <div className="p-5">
                                    
                                        <div className="flex justify-center mb-4">
                                            <div className="w-16 h-16 shadow-lg ring-4 ring-white bg-blue-500"></div>
                                        </div>

                    
                                        <div className="text-center mb-4">
                                            <h2 className="text-lg font-bold text-slate-800 leading-tight">
                                                {item.first_name} {item.last_name}
                                            </h2>
                                            <span
                                                className={`inline-block mt-1.5 px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide ${
                                                    isStudent
                                                        ? "bg-blue-50 text-blue-600 ring-1 ring-blue-200"
                                                        : "bg-emerald-50 text-emerald-600 ring-1 ring-emerald-200"
                                                }`}
                                            >
                                                {item.type}
                                            </span>
                                        </div>

                                    
                                        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-5">
                                            <InfoItem label="ID" value={`#${item.id}`} />
                                            <InfoItem label="Age" value={item.age} />
                                            <InfoItem label="Country" value={item.country} />
                                            <InfoItem
                                                label="Points"
                                                value={item.points}
                                               
                                            />
                                        </div>

                                        
                                        <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                                            <span className="text-[11px] text-slate-400 font-medium">
                                                {item.created_at}
                                            </span>
                                            <button
                                                className="flex items-center gap-1.5 text-xs font-semibold text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg transition-colors"
                                                onClick={() =>
                                                    alert(
                                                        `Delete ${item.first_name} ${item.last_name}?`
                                                    )
                                                }
                                            >
                                                <svg
                                                    className="w-3.5 h-3.5"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                                    />
                                                </svg>
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
        </div>
    );
}

function InfoItem({ label, value, highlight = false }) {
    return (
        <div>
            <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">
                {label}
            </p>
            <p
                className={`text-sm font-semibold mt-0.5 ${
                    highlight ? "text-indigo-600" : "text-slate-700"
                }`}
            >
                {value}
            </p>
        </div>
    );
}