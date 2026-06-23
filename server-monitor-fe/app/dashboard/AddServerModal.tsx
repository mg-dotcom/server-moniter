"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { addServer } from "./actions";

type Props = {
    onClose: () => void;
};

export default function AddServerModal({ onClose }: Props) {
    const [name, setName] = useState("");
    const [endpoint, setEndpoint] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "unset";
        };
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        setTimeout(onClose, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !endpoint.trim()) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        setError(null);

        try {
            await addServer({
                name: name.trim(),
                endpoint: endpoint.trim(),
            });

            handleClose();
        } catch (err: unknown) {
            setError(err instanceof Error ? err.message : "Failed to add server");
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop พื้นหลังสีเข้ม */}
            <div 
                className="absolute inset-0 bg-black transition-opacity duration-300"
                style={{ opacity: isOpen ? 0.6 : 0 }}
                onClick={handleClose}
            />
            
            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300"
                 style={{
                    opacity: isOpen ? 1 : 0,
                    transform: isOpen ? "scale(1)" : "scale(0.95)",
                 }}
            >
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-white">Add New Server</h2>
                    <button
                        onClick={handleClose}
                        disabled={isLoading}
                        className="text-slate-400 hover:text-slate-200 transition-colors disabled:opacity-50"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Server Name
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g., Production Server"
                            className="w-full px-4 py-2 bg-slate-950 text-white placeholder-slate-500 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                            disabled={isLoading}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-slate-300">
                            Endpoint
                        </label>
                        <input
                            type="url"
                            value={endpoint}
                            onChange={(e) => setEndpoint(e.target.value)}
                            placeholder="e.g., https://api.example.com"
                            className="w-full px-4 py-2 bg-slate-950 text-white placeholder-slate-500 border border-slate-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:opacity-50"
                            disabled={isLoading}
                        />
                    </div>

                    {error && (
                        <div className="bg-red-950/40 border border-red-900/50 text-red-400 px-4 py-3 rounded-lg text-sm animate-shake">
                            {error}
                        </div>
                    )}

                    <div className="flex gap-3 pt-4">
                        <button
                            type="button"
                            onClick={handleClose}
                            disabled={isLoading}
                            className="flex-1 px-4 py-2 border border-slate-700 text-slate-300 rounded-lg hover:bg-slate-800 hover:text-white disabled:opacity-50 font-medium transition-all"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 font-medium transition-all shadow-lg shadow-blue-600/20"
                        >
                            {isLoading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <span className="animate-spin text-xs">⏳</span>
                                    Adding...
                                </span>
                            ) : (
                                "Add Server"
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}