"use client";

import { useState } from "react";
import Link from 'next/link';
import DataJson from "../Data.json";

export default function PeoplePage() {
    const [search, setSearch] = useState("");

    const filteredData = DataJson.filter((item) => {
        const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
        return (
            fullName.includes(search.toLowerCase()) ||
            item.id.toString().includes(search)
        );
    });

    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 flex flex-col">
            <header className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link href="/" className="text-2xl font-bold text-indigo-600 hover:opacity-80 transition">
                        BuildYourFuture
                    </Link>
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            Home
                        </Link>
                        <Link href="/about" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            About
                        </Link>
                        <Link href="/content" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            Content
                        </Link>
                        <Link href="/contact" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            Contact
                        </Link>
                        <Link href="/people" className="text-indigo-600 font-bold">
                            People
                        </Link>
                        <Link href="/weatherweb" className="text-gray-600 hover:text-indigo-600 font-medium transition">
                            Weather
                        </Link>
                    </nav>
                    <button className="md:hidden text-gray-600 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                <section className="bg-white py-12 border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                            Meet Our <span className="text-indigo-600">Community</span>
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Connect with fellow learners and professionals in our growing community.
                        </p>
                    </div>
                </section>

                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex justify-center mb-8">
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
                            <p className="text-sm mt-1">Try a different search term</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {filteredData.map((item) => {
                                const isStudent = item.type === "Student";

                                return (
                                    <div
                                        key={item.id}
                                        className="group relative bg-white rounded-2xl border border-slate-200/80 shadow-sm transition-all duration-300 overflow-hidden hover:shadow-lg"
                                    >
                                        <div className="p-6">
                                            <div className="flex justify-center mb-4">
                                                <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                    {item.first_name[0]}{item.last_name[0]}
                                                </div>
                                            </div>

                                            <div className="text-center mb-4">
                                                <h2 className="text-lg font-bold text-slate-800 leading-tight">
                                                    {item.first_name} {item.last_name}
                                                </h2>
                                                <span
                                                    className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
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
                                                    highlight={item.points > 100}
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
                </div>
            </main>

            <footer className="bg-gray-800 text-white py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p>&copy; 2024 BuildYourFuture. All rights reserved.</p>
                </div>
            </footer>
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